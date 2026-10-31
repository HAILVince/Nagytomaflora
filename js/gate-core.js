/*
 * Gate core: forgiving answer matching that never stores the answers.
 *
 * Only hashes of the answer are kept in js/config.js, so the page source does
 * not give the lyrics away. To still forgive typos we hash not just each word,
 * but every version of it with one or two letters removed (the "deletion
 * neighbourhood" trick used by spell checkers). A typed word matches when its
 * own neighbourhood overlaps the stored one, which happens for
 * missing, extra, wrong and swapped letters.
 *
 * Also ignored: capital letters, accents (ő/o, á/a ...), punctuation, spacing.
 * Works in the browser (window.FloraGate) and in Node (tools/make-gate.cjs).
 */
(function (root) {
  'use strict';

  var MOD = 4294967296;

  // cyrb53: small, fast, deterministic 53-bit string hash (not cryptographic).
  function cyrb53(str, seed) {
    var h1 = 0xdeadbeef ^ (seed || 0);
    var h2 = 0x41c6ce57 ^ (seed || 0);
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  function key(s) { return (cyrb53('flora|' + s) % MOD).toString(36); }

  // "Hogy vagy, Flóra?!" -> ["hogy", "vagy", "flora"]
  function words(text) {
    return String(text || '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/['’`´]/g, '')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim()
      .split(' ')
      .filter(Boolean);
  }

  // The word itself plus every version with up to `depth` letters removed.
  function deletions(s, depth) {
    var seen = {}, out = [s], layer = [s];
    seen[s] = 1;
    for (var d = 0; d < depth; d++) {
      var next = [];
      for (var a = 0; a < layer.length; a++) {
        var x = layer[a];
        for (var i = 0; i < x.length; i++) {
          var y = x.slice(0, i) + x.slice(i + 1);
          if (y && !seen[y]) { seen[y] = 1; next.push(y); out.push(y); }
        }
      }
      layer = next;
    }
    return out;
  }

  // How many wrong letters a word of this length may have.
  function wordDepth(len) { return len <= 2 ? 0 : len <= 5 ? 1 : len <= 9 ? 2 : 3; }
  // The whole line with the spaces removed (forgives missing / extra spaces).
  function lineDepth(len) { return len <= 4 ? 0 : 1; }

  function wordKeys(w) { return deletions(w, wordDepth(w.length)).map(key); }
  function lineKeys(ws) {
    var s = ws.join('');
    return deletions(s, lineDepth(s.length)).map(key);
  }

  // Text -> { w: ['k1,k2,...', ...one string per word], l: 'k1,k2,...' }
  function hashAnswer(text) {
    var ws = words(text);
    return { w: ws.map(function (x) { return wordKeys(x).join(','); }), l: lineKeys(ws).join(',') };
  }

  function overlaps(setObj, list) {
    for (var i = 0; i < list.length; i++) if (setObj[list[i]]) return true;
    return false;
  }

  // Longest in-order run of typed words that fuzzy-match answer words.
  function fuzzyLcs(typedSets, answerLists) {
    var n = typedSets.length, m = answerLists.length, prev = [], cur, i, j;
    for (j = 0; j <= m; j++) prev.push(0);
    for (i = 1; i <= n; i++) {
      cur = [0];
      for (j = 1; j <= m; j++) {
        cur[j] = overlaps(typedSets[i - 1], answerLists[j - 1])
          ? prev[j - 1] + 1
          : Math.max(prev[j], cur[j - 1]);
      }
      prev = cur;
    }
    return prev[m];
  }

  // How many answer words may be missing and still count as correct.
  function needed(total) { return total <= 2 ? total : total - Math.max(1, Math.floor(total / 4)); }

  // -> { exact: boolean, matched: number, total: number }
  function check(input, answer) {
    var typed = words(input);
    var lists = answer.w.map(function (s) { return s.split(','); });
    var total = lists.length;
    if (!typed.length) return { exact: false, matched: 0, total: total };

    var sets = typed.map(function (t) {
      var o = {};
      wordKeys(t).forEach(function (k) { o[k] = 1; });
      return o;
    });
    var matched = fuzzyLcs(sets, lists);
    var ok = matched >= needed(total);

    if (!ok) {
      var line = {};
      answer.l.split(',').forEach(function (k) { line[k] = 1; });
      ok = overlaps(line, lineKeys(typed));
      if (ok) matched = total;
    }
    return { exact: ok, matched: matched, total: total };
  }

  var api = { words: words, hashAnswer: hashAnswer, check: check };
  root.FloraGate = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
