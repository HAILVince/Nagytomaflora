/*
 * Gate core: turns typed text into comparable word hashes.
 *
 * The song lyrics are never stored in the repo. Only a hash of every word is,
 * so peeking at the page source does not give the answer away.
 * Works in the browser (window.FloraGate) and in Node (tools/make-gate.cjs).
 */
(function (root) {
  'use strict';

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

  // "Hogy vagy, Flóra?!" -> ["hogy", "vagy", "flora"]
  // Case, accents (incl. ő/ű), punctuation and spacing are all ignored.
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

  function hashWord(word) {
    return cyrb53('flora|' + word).toString(36);
  }

  function hashAnswer(text) {
    return words(text).map(hashWord);
  }

  // Length of the longest common subsequence of two arrays.
  function lcs(a, b) {
    var prev = new Array(b.length + 1).fill(0);
    for (var i = 1; i <= a.length; i++) {
      var cur = [0];
      for (var j = 1; j <= b.length; j++) {
        cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
      }
      prev = cur;
    }
    return prev[b.length];
  }

  // -> { exact: boolean, matched: number, total: number }
  function check(input, answerHashes) {
    var typed = hashAnswer(input);
    var exact = typed.length === answerHashes.length &&
      typed.every(function (h, i) { return h === answerHashes[i]; });
    return { exact: exact, matched: lcs(typed, answerHashes), total: answerHashes.length };
  }

  var api = { words: words, hashWord: hashWord, hashAnswer: hashAnswer, check: check };
  root.FloraGate = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
