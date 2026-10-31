/* Flóra's birthday site: behaviour. No build step, no dependencies. */
(function () {
  'use strict';

  var CFG = window.FLORA_CONFIG;
  var I18N = window.FLORA_I18N;
  var Gate = window.FloraGate;

  /* ------------------------------------------------------------ helpers */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SVGNS = 'http://www.w3.org/2000/svg';

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* private mode */ } }
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* --------------------------------------------------------------- i18n */
  var lang = store.get('flora-lang');
  if (!I18N[lang]) lang = 'hu';

  function dig(path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, I18N[lang]);
  }
  function fmt(s, vars) {
    return s.replace(/\{(\w+)\}/g, function (m, k) { return vars && k in vars ? vars[k] : m; });
  }
  function t(path, vars) {
    var v = dig(path);
    return typeof v === 'string' ? fmt(v, vars) : v;
  }
  function loc(obj) { return obj ? (obj[lang] || obj.hu || '') : ''; }
  function nf(n) { return new Intl.NumberFormat(lang === 'hu' ? 'hu-HU' : 'en-GB').format(n); }

  function ageInfo(now) {
    var b = CFG.birth;
    var thisYearBday = new Date(now.getFullYear(), b.month - 1, b.day);
    var age = now.getFullYear() - b.year - (now < thisYearBday ? 1 : 0);
    var next = new Date(now.getFullYear() + (now < thisYearBday ? 0 : 1), b.month - 1, b.day);
    var daysToNext = (next - now) / 864e5;
    // Within four months of the birthday we greet her with the age she is turning.
    return { age: age, shown: daysToNext <= 120 ? age + 1 : age };
  }
  function ordinal(n) {
    if (lang === 'hu') return n + '.';
    var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    $('meta[name="description"]').setAttribute('content', t('meta.desc'));

    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });

    $('#heroTitle').textContent = t('hero.title', { age: ordinal(ageInfo(new Date()).shown) });
    $('#heroImg').alt = t('hero.photoAlt');

    var langBtn = $('#langBtn');
    langBtn.textContent = t('ui.langShort');
    langBtn.title = t('ui.switchLang');
    langBtn.setAttribute('aria-label', t('ui.switchLang'));
    langBtn.lang = lang === 'hu' ? 'en' : 'hu';

    updateSoundBtn();
    [['#lbClose', 'ui.close'], ['#lbPrev', 'ui.prev'], ['#lbNext', 'ui.next']].forEach(function (p) {
      var el = $(p[0]); el.setAttribute('aria-label', t(p[1])); el.title = t(p[1]);
    });
  }

  /* -------------------------------------------------------------- audio */
  var soundOn = store.get('flora-sound') !== 'off';
  var actx = null;
  function audio() {
    if (!actx) { var AC = window.AudioContext || window.webkitAudioContext; if (AC) actx = new AC(); }
    if (actx && actx.state === 'suspended') actx.resume();
    return actx;
  }
  function tone(freq, start, dur, vol, type) {
    var ctx = audio(); if (!ctx) return;
    var o = ctx.createOscillator(), g = ctx.createGain(), t0 = ctx.currentTime + start;
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function chime() {
    if (!soundOn) return;
    try { [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach(function (f, i) { tone(f, i * 0.13, 2.2, 0.06); }); } catch (e) { /* no audio */ }
  }
  function blip(i) {
    if (!soundOn) return;
    try { tone(660 + i * 110, 0, 0.5, 0.05); tone(990 + i * 165, 0.09, 0.6, 0.035); } catch (e) { /* no audio */ }
  }
  function updateSoundBtn() {
    var b = $('#soundBtn');
    b.setAttribute('aria-pressed', String(soundOn));
    var label = soundOn ? t('ui.soundOn') : t('ui.soundOff');
    b.setAttribute('aria-label', label); b.title = label;
  }

  /* ------------------------------------------------------- effects canvas */
  var fx = (function () {
    var c = $('#fx'), ctx = c.getContext('2d'), parts = [], raf = 0, W = 0, H = 0;
    var COLORS = ['255,216,138', '244,169,60', '255,243,200', '169,189,147', '255,154,138'];
    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', size); size();

    function burst(x, y, o) {
      if (reduceMotion) return;
      o = o || {};
      var n = o.count || 70;
      for (var i = 0; i < n; i++) {
        var a = o.rise ? -Math.PI / 2 + (Math.random() - 0.5) * 1.5 : Math.random() * Math.PI * 2;
        var s = (o.speed || 4.2) * (0.35 + Math.random());
        parts.push({
          x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
          g: o.rise ? -0.012 : 0.045, life: 0,
          max: (o.life || 95) * (0.6 + Math.random() * 0.8),
          r: Math.random() * 2.2 + 0.9, col: COLORS[(Math.random() * COLORS.length) | 0]
        });
      }
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function loop() {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      parts = parts.filter(function (p) { return p.life < p.max; });
      parts.forEach(function (p) {
        p.life++; p.vx *= 0.985; p.vy = p.vy * 0.985 + p.g; p.x += p.vx; p.y += p.vy;
        var a = 1 - p.life / p.max, R = p.r * 6;
        var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        g.addColorStop(0, 'rgba(' + p.col + ',' + a.toFixed(3) + ')');
        g.addColorStop(1, 'rgba(' + p.col + ',0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, 6.2832); ctx.fill();
      });
      raf = parts.length ? requestAnimationFrame(loop) : 0;
      if (!parts.length) ctx.clearRect(0, 0, W, H);
    }
    return { burst: burst };
  })();

  /* -------------------------------------------------------------- candle */
  function candleSVG(id) {
    return '' +
      '<svg class="candle" viewBox="0 0 140 280" aria-hidden="true" focusable="false">' +
      '<defs>' +
      '<radialGradient id="' + id + '-glow"><stop offset="0" stop-color="#ffd88a" stop-opacity=".9"/><stop offset=".35" stop-color="#f4a93c" stop-opacity=".32"/><stop offset="1" stop-color="#f4a93c" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="' + id + '-wax" x1="0" x2="1"><stop offset="0" stop-color="#b9ac8b"/><stop offset=".45" stop-color="#f0e6cc"/><stop offset="1" stop-color="#aa9e7d"/></linearGradient>' +
      '<linearGradient id="' + id + '-fl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#f4a93c"/><stop offset=".6" stop-color="#ffcf6e"/><stop offset="1" stop-color="#fff3c8"/></linearGradient>' +
      '</defs>' +
      '<circle class="candle__glow" cx="70" cy="86" r="104" fill="url(#' + id + '-glow)"/>' +
      '<ellipse cx="70" cy="266" rx="60" ry="10" fill="#17261d"/>' +
      '<ellipse cx="70" cy="262" rx="52" ry="8" fill="#22372a"/>' +
      '<rect x="42" y="118" width="56" height="144" rx="7" fill="url(#' + id + '-wax)"/>' +
      '<ellipse cx="70" cy="118" rx="28" ry="7" fill="#f7efd9"/>' +
      '<path d="M91 121q5 0 5 6v28q0 7-5.500 7t-5.500-7v-24z" fill="#f7efd9"/>' +
      '<path d="M48 122q-4 0-4 5v14q0 5 4 5t4-5v-12z" fill="#f7efd9" opacity=".8"/>' +
      '<path d="M70 118v-18" stroke="#2a2118" stroke-width="3" stroke-linecap="round"/>' +
      '<circle class="candle__ember" cx="70" cy="100" r="2.8" fill="#ff8a3a"/>' +
      '<g class="candle__flame">' +
      '<path d="M70 38c15 23 22 40 0 63C48 78 55 61 70 38z" fill="url(#' + id + '-fl)"/>' +
      '<path d="M70 72c6.500 10 9 19 0 29-9-10-6.500-19 0-29z" fill="#fffaf0" opacity=".92"/>' +
      '</g>' +
      '<path class="candle__smoke" d="M70 96c-9-14 9-21 0-35s9-22 0-37" fill="none" stroke="#cfd6cf" stroke-width="3" stroke-linecap="round"/>' +
      '</svg>';
  }

  /* --------------------------------------------------------- trees (svg) */
  function pinePath(x, base, h, w) {
    var d = '', tiers = 4;
    for (var i = 0; i < tiers; i++) {
      var apex = base - h + i * h * 0.21;
      var bottom = apex + h * 0.42;
      var half = (w / 2) * (0.45 + i * 0.2);
      d += 'M' + x.toFixed(1) + ' ' + apex.toFixed(1) + 'L' + (x + half).toFixed(1) + ' ' + bottom.toFixed(1) +
        'L' + (x - half).toFixed(1) + ' ' + bottom.toFixed(1) + 'Z';
    }
    return d + 'M' + (x - 2.5).toFixed(1) + ' ' + (base - h * 0.1).toFixed(1) + 'h5v' + (h * 0.1 + 6).toFixed(1) + 'h-5z';
  }
  function pineRow(r, x0, x1, step, base, hMin, hMax, wRatio) {
    var d = '';
    for (var x = x0; x < x1; x += step * (0.7 + r() * 0.6)) {
      var h = hMin + r() * (hMax - hMin);
      d += pinePath(x, base, h, h * wRatio);
    }
    return d;
  }
  function buildHeroTrees() {
    var r = rng(11);
    var d = 'M0 160V150' + 'H1200V160Z' + pineRow(r, -10, 1210, 26, 160, 60, 150, 0.55);
    $('#heroTrees').innerHTML = '<path d="' + d + '"/>';
  }

  function fernPath(r, x, y, len, ang) {
    var rad = ang * Math.PI / 180, dx = Math.sin(rad), dy = -Math.cos(rad);
    var bend = (r() - 0.5) * len * 0.5;
    var p1 = { x: x + dx * len * 0.5 + bend, y: y + dy * len * 0.6 };
    var p2 = { x: x + dx * len, y: y + dy * len };
    var d = 'M' + x + ' ' + y + 'Q' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1) + ' ' + p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
    for (var s = 0.18; s < 1; s += 0.075) {
      var u = 1 - s;
      var px = u * u * x + 2 * u * s * p1.x + s * s * p2.x;
      var py = u * u * y + 2 * u * s * p1.y + s * s * p2.y;
      var tx = 2 * u * (p1.x - x) + 2 * s * (p2.x - p1.x);
      var ty = 2 * u * (p1.y - y) + 2 * s * (p2.y - p1.y);
      var tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
      var ll = (1 - s) * len * 0.3 + 4;
      d += 'M' + px.toFixed(1) + ' ' + py.toFixed(1) + 'l' + ((-ty + tx * 0.6) * ll).toFixed(1) + ' ' + ((tx + ty * 0.6) * ll).toFixed(1);
      d += 'M' + px.toFixed(1) + ' ' + py.toFixed(1) + 'l' + ((ty + tx * 0.6) * ll).toFixed(1) + ' ' + ((-tx + ty * 0.6) * ll).toFixed(1);
    }
    return d;
  }

  /* ================================================================ GATE */
  var gate = { el: $('#gate'), idx: 0, tries: 0, busy: false, fb: null };
  var gateForm = $('#gateForm'), gateInput = $('#gateInput'), gateFeedback = $('#gateFeedback');
  var gateSubmit = $('#gateSubmit'), gateHint = $('#gateHint');

  function gateSteps() { return (CFG.gate && CFG.gate.steps) || []; }

  function renderGate(keepFeedback) {
    var steps = gateSteps(), s = steps[gate.idx];
    if (!s) return;
    $('#gateLabel').textContent = loc(s.prompt);
    gateInput.placeholder = t('gate.placeholder');
    gateSubmit.textContent = gate.idx === steps.length - 1 ? t('gate.light') : t('gate.next');
    gateHint.hidden = !(s.hint && gate.tries > 0);

    var dots = $('#gateDots');
    dots.hidden = steps.length < 2;
    dots.setAttribute('aria-label', t('gate.progress', { n: gate.idx + 1, t: steps.length }));
    dots.innerHTML = steps.map(function (_, i) {
      return '<li class="' + (i < gate.idx ? 'is-done' : i === gate.idx ? 'is-current' : '') + '"></li>';
    }).join('');

    if (keepFeedback !== false) renderFeedback();
  }

  function setFeedback(kind, vars) { gate.fb = { kind: kind, vars: vars }; renderFeedback(); }
  function renderFeedback() {
    var fb = gate.fb, s = gateSteps()[gate.idx];
    gateFeedback.classList.toggle('is-hint', !!fb && fb.kind === 'hint');
    if (!fb) { gateFeedback.textContent = ''; return; }
    gateFeedback.textContent = fb.kind === 'hint' ? loc(s && s.hint) : t('gate.' + fb.kind, fb.vars);
  }

  gateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (gate.busy) return;
    var steps = gateSteps(), s = steps[gate.idx], val = gateInput.value;
    if (!val.trim()) { setFeedback('empty'); gateInput.focus(); return; }
    var res = Gate.check(val, s.answer);
    if (res.exact) {
      gate.idx++; gate.tries = 0;
      if (gate.idx >= steps.length) { unlock(true); return; }
      gateInput.value = '';
      setFeedback('ok');
      renderGate();
      gateInput.focus();
    } else {
      gate.tries++;
      setFeedback('wrong', { m: res.matched, t: res.total });
      renderGate();
      gateForm.classList.remove('is-shaking'); void gateForm.offsetWidth; gateForm.classList.add('is-shaking');
      gateInput.focus();
    }
  });
  gateInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); gateForm.requestSubmit(); }
  });
  gateHint.addEventListener('click', function () { setFeedback('hint'); gateInput.focus(); });

  var siteBooted = false;
  function unlock(animate) {
    var site = $('#site');
    gate.busy = true;

    function finish() {
      gate.el.hidden = true;
      store.set('flora-unlocked', '1');
      document.body.classList.remove('is-locked');
    }
    function reveal() {
      site.hidden = false;
      bootSite();
      window.scrollTo(0, 0);
      document.body.classList.remove('is-locked');
      if (!animate) { gate.el.hidden = true; return; }
      site.classList.add('is-entering');

      var ember = $('#gateCandle .candle__ember').getBoundingClientRect();
      gate.el.style.setProperty('--fx', (ember.left + ember.width / 2) + 'px');
      gate.el.style.setProperty('--fy', (ember.top - 20) + 'px');

      var canMask = window.CSS && CSS.registerProperty && !reduceMotion;
      if (canMask) { gate.el.classList.add('is-opening'); setTimeout(finish, 2300); }
      else { gate.el.classList.add('is-fading'); setTimeout(finish, reduceMotion ? 50 : 1050); }
    }

    if (!animate) { reveal(); return; }
    $('#gateTitle').textContent = t('gate.lit');
    gate.el.classList.add('is-lit');
    gateInput.blur();
    chime();
    setTimeout(reveal, reduceMotion ? 150 : 1700);
  }

  $('#relock').addEventListener('click', function () {
    store.del('flora-unlocked');
    window.location.href = window.location.pathname;
  });

  /* ============================================================== TAROT */
  var ICONS = ['ic-forager', 'ic-trail', 'ic-botanist', 'ic-animals', 'ic-witch', 'ic-lens'];
  var ACCENTS = [['#c0392b', '#ff9a8a'], ['#3f7a4f', '#a6dcae'], ['#b4527f', '#f4aac8'],
    ['#a8743d', '#efbd8b'], ['#6d4fa0', '#cdb4f5'], ['#3f6f8a', '#a3d2e8']];
  var flipped = {};

  function tarotBack(i) {
    var dots = '';
    for (var k = 0; k < 16; k++) {
      var a = k / 16 * Math.PI * 2;
      dots += '<circle cx="' + (100 + Math.cos(a) * 68).toFixed(1) + '" cy="' + (160 + Math.sin(a) * 68).toFixed(1) + '" r="' + (k % 2 ? 1.6 : 2.6) + '"/>';
    }
    return '<svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMid slice" focusable="false">' +
      '<rect x="10" y="10" width="180" height="300" rx="10" fill="none" stroke="#f4a93c" stroke-opacity=".5"/>' +
      '<rect x="18" y="18" width="164" height="284" rx="6" fill="none" stroke="#f4a93c" stroke-opacity=".22"/>' +
      '<g fill="#f4a93c" fill-opacity=".8">' + dots + '</g>' +
      '<circle cx="100" cy="160" r="54" fill="none" stroke="#f4a93c" stroke-opacity=".6"/>' +
      '<mask id="cm' + i + '"><rect width="200" height="320" fill="#fff"/><circle cx="116" cy="150" r="34" fill="#000"/></mask>' +
      '<circle cx="100" cy="160" r="40" fill="#f4a93c" mask="url(#cm' + i + ')"/>' +
      '<path d="M138 128l2.200 5 5.300.5-4 3.500 1.200 5.300-4.700-2.800-4.700 2.800 1.200-5.300-4-3.500 5.300-.5z" fill="#ffd88a"/>' +
      '<g fill="#f4a93c" fill-opacity=".7"><circle cx="34" cy="40" r="2"/><circle cx="168" cy="52" r="1.6"/><circle cx="40" cy="282" r="1.8"/><circle cx="160" cy="276" r="2.2"/></g>' +
      '</svg>';
  }

  function cardLabel(i, isFlipped) {
    var name = t('tarot.cards')[i].name;
    return t(isFlipped ? 'tarot.unflipLabel' : 'tarot.flipLabel', { name: name });
  }
  function syncFlipAll() {
    var n = t('tarot.cards').length, all = Object.keys(flipped).filter(function (k) { return flipped[k]; }).length === n;
    $('#flipAll').textContent = all ? t('tarot.hideAll') : t('tarot.flipAll');
  }
  function setFlipped(card, i, on) {
    flipped[i] = on;
    card.classList.toggle('is-flipped', on);
    $('.tarot__face', card).setAttribute('aria-hidden', String(!on));
    var b = $('.tarot__flip', card);
    b.setAttribute('aria-pressed', String(on));
    b.setAttribute('aria-label', cardLabel(i, on));
  }

  function renderCards() {
    var box = $('#cards'), cards = t('tarot.cards');
    box.innerHTML = '';
    cards.forEach(function (c, i) {
      var on = !!flipped[i];
      var el = document.createElement('article');
      el.className = 'tarot' + (on ? ' is-flipped' : '');
      el.style.setProperty('--accent', ACCENTS[i][0]);
      el.style.setProperty('--accent-bright', ACCENTS[i][1]);
      el.innerHTML =
        '<div class="tarot__inner">' +
        '<div class="tarot__back" aria-hidden="true">' + tarotBack(i) + '</div>' +
        '<div class="tarot__face" aria-hidden="' + (!on) + '">' +
        '<svg class="tarot__icon" aria-hidden="true" focusable="false"><use href="#' + ICONS[i] + '"/></svg>' +
        '<h3 class="tarot__name">' + esc(c.name) + '</h3>' +
        '<p class="tarot__line">' + esc(c.line) + '</p><hr class="tarot__rule">' +
        '<p class="tarot__wishlead">' + esc(t('tarot.wishLead')) + '</p>' +
        '<p class="tarot__wish">' + esc(c.wish) + '</p></div></div>' +
        '<button class="tarot__flip" type="button" aria-pressed="' + on + '" aria-label="' + esc(cardLabel(i, on)) + '"></button>';
      $('.tarot__flip', el).addEventListener('click', function () {
        setFlipped(el, i, !flipped[i]); syncFlipAll();
        if (flipped[i]) blip(i % 4);
      });
      box.appendChild(el);
    });
    syncFlipAll();
  }
  $('#flipAll').addEventListener('click', function () {
    var cards = $$('.tarot'), allOn = cards.every(function (_, i) { return flipped[i]; });
    cards.forEach(function (el, i) { setTimeout(function () { setFlipped(el, i, !allOn); }, reduceMotion ? 0 : i * 110); });
    setTimeout(syncFlipAll, reduceMotion ? 0 : cards.length * 110 + 20);
    if (!allOn) blip(2);
  });

  /* ============================================================== HUNT */
  var SHROOMS = [
    { sym: 'sh-amanita', x: 70, y: 392, w: 96, h: 128 },
    { sym: 'sh-chanterelle', x: 290, y: 428, w: 80, h: 107 },
    { sym: 'sh-porcini', x: 508, y: 390, w: 100, h: 133 },
    { sym: 'sh-saffron', x: 650, y: 444, w: 76, h: 101 },
    { sym: 'sh-inkcap', x: 408, y: 372, w: 54, h: 72 }
  ];
  var found = {};
  var toastTimer = 0;

  function foundCount() { return Object.keys(found).length; }

  function buildScene() {
    var r = rng(7), svg = $('#huntScene');
    var far = pineRow(r, -20, 820, 34, 345, 100, 170, 0.5);
    var mid = pineRow(r, -20, 820, 52, 410, 150, 230, 0.5);
    var near = pineRow(r, -40, 150, 60, 480, 230, 310, 0.5) + pineRow(r, 690, 840, 60, 480, 230, 310, 0.5);

    var fernSpec = [
      [48, 540, 110, -35], [66, 545, 120, 15], [86, 548, 90, 50], [20, 548, 100, -55],
      [372, 540, 96, 35], [392, 548, 110, 62], [345, 545, 80, 10],
      [610, 540, 110, 28], [640, 548, 100, 58], [572, 548, 90, -15],
      [740, 550, 120, -30], [774, 548, 110, -52], [712, 552, 80, 5],
      [220, 556, 90, -25], [250, 556, 85, 22], [480, 556, 80, 40]
    ];
    var ferns = fernSpec.map(function (f, i) {
      return '<path d="' + fernPath(r, f[0], f[1], f[2], f[3]) + '" stroke="' + (i % 3 ? '#183626' : '#1f4730') + '"/>';
    }).join('');

    var stars = '', flies = '';
    for (var i = 0; i < 26; i++) stars += '<circle cx="' + (r() * 800).toFixed(0) + '" cy="' + (r() * 210).toFixed(0) + '" r="' + (0.5 + r() * 1.1).toFixed(1) + '" fill="#eadfc8" opacity="' + (0.25 + r() * 0.5).toFixed(2) + '"/>';
    for (var j = 0; j < 16; j++) flies += '<circle class="fly" cx="' + (30 + r() * 740).toFixed(0) + '" cy="' + (200 + r() * 280).toFixed(0) + '" r="' + (1.4 + r() * 1.4).toFixed(1) + '" fill="#ffd88a" style="animation-delay:' + (r() * 3.4).toFixed(2) + 's;animation-duration:' + (2.6 + r() * 2.4).toFixed(1) + 's"/>';

    var shrooms = SHROOMS.map(function (s, i) {
      var cx = s.x + s.w / 2, cy = s.y + s.h / 2, pad = 14;
      return '<g class="shroom" tabindex="0" role="button" data-i="' + i + '">' +
        '<circle class="shroom__glow" cx="' + cx + '" cy="' + (cy + 6) + '" r="' + (s.w * 0.95) + '" fill="url(#shGlow)"/>' +
        '<g class="shroom__art" filter="url(#shDim)"><use href="#' + s.sym + '" x="' + s.x + '" y="' + s.y + '" width="' + s.w + '" height="' + s.h + '"/></g>' +
        '<rect class="shroom__ring" x="' + (s.x - 6) + '" y="' + (s.y - 6) + '" width="' + (s.w + 12) + '" height="' + (s.h + 12) + '" rx="18"/>' +
        '<rect class="shroom__hit" x="' + (s.x - pad) + '" y="' + (s.y - pad) + '" width="' + (s.w + 2 * pad) + '" height="' + (s.h + 2 * pad) + '"/>' +
        '</g>';
    }).join('');

    svg.innerHTML =
      '<defs>' +
      '<linearGradient id="huntSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#060c09"/><stop offset=".55" stop-color="#0f2018"/><stop offset="1" stop-color="#17301f"/></linearGradient>' +
      '<radialGradient id="shGlow"><stop offset="0" stop-color="#ffd88a" stop-opacity=".55"/><stop offset=".5" stop-color="#f4a93c" stop-opacity=".18"/><stop offset="1" stop-color="#f4a93c" stop-opacity="0"/></radialGradient>' +
      '<radialGradient id="huntMoon"><stop offset="0" stop-color="#fff6dc" stop-opacity=".5"/><stop offset="1" stop-color="#fff6dc" stop-opacity="0"/></radialGradient>' +
      '</defs>' +
      '<rect width="800" height="560" fill="url(#huntSky)"/>' + stars +
      '<circle cx="132" cy="84" r="70" fill="url(#huntMoon)"/><circle cx="132" cy="84" r="27" fill="#f1e7c9"/>' +
      '<g fill="#d9ceac" opacity=".7"><circle cx="124" cy="78" r="5"/><circle cx="141" cy="92" r="4"/><circle cx="136" cy="71" r="2.500"/></g>' +
      '<path d="' + far + '" fill="#112219"/>' +
      '<path d="' + mid + '" fill="#0d1b13"/>' +
      '<path d="M0 438C150 424 300 450 450 438S700 430 800 442V560H0Z" fill="#0b1610"/>' +
      '<path d="M572 0C576 120 568 300 558 530H614C606 300 614 120 610 0Z" fill="#070e09"/>' +
      '<path d="M582 40c3 90-2 200-8 330M598 20c2 110-2 220-4 340" stroke="#13241a" stroke-width="2" fill="none"/>' +
      '<path d="' + near + '" fill="#08110b"/>' +
      '<path d="M0 492C120 476 260 502 400 490S680 480 800 494V560H0Z" fill="#08110c"/>' +
      '<path d="M540 522c20-14 40-10 56 4M626 520c18-12 38-8 54 6" stroke="#0c1a12" stroke-width="7" stroke-linecap="round" fill="none"/>' +
      flies + shrooms +
      '<g fill="none" stroke-width="1.8" stroke-linecap="round" pointer-events="none">' + ferns + '</g>';

    $$('.shroom', svg).forEach(function (g) {
      var i = +g.getAttribute('data-i');
      g.addEventListener('click', function () { findShroom(i); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); findShroom(i); }
      });
    });
    restoreScene();
  }

  function restoreScene() {
    $$('.shroom', $('#huntScene')).forEach(function (g) {
      var i = +g.getAttribute('data-i'), on = !!found[i];
      g.classList.toggle('is-found', on);
      var art = $('.shroom__art', g);
      if (on) art.removeAttribute('filter'); else art.setAttribute('filter', 'url(#shDim)');
      g.setAttribute('aria-disabled', String(on));
    });
  }

  function showToast(msg) {
    var el = $('#huntToast');
    el.textContent = msg; el.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-on'); }, 3200);
  }

  function findShroom(i) {
    if (found[i]) return;
    found[i] = true;
    var g = $('.shroom[data-i="' + i + '"]');
    g.classList.add('is-found');
    $('.shroom__art', g).removeAttribute('filter');
    g.setAttribute('aria-disabled', 'true');
    blip(foundCount() - 1);

    var items = t('hunt.items');
    showToast(t('hunt.found', { name: items[i].name }));
    var rect = g.getBoundingClientRect();
    fx.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, { count: 36, speed: 3, life: 70 });
    renderHunt();

    if (foundCount() === SHROOMS.length) {
      setTimeout(function () {
        $('#huntDone').hidden = false;
        chime();
        var r2 = $('.hunt__stage').getBoundingClientRect();
        fx.burst(r2.left + r2.width / 2, r2.top + r2.height * 0.55, { count: 140, speed: 6, life: 120 });
      }, 700);
    }
  }

  function renderHunt() {
    var items = t('hunt.items'), n = foundCount();
    $('#huntCounter').textContent = t('hunt.counter', { n: n, t: SHROOMS.length });

    $$('.shroom', $('#huntScene')).forEach(function (g) {
      var i = +g.getAttribute('data-i');
      g.setAttribute('aria-label', found[i] ? t('hunt.foundLabel', { name: items[i].name }) : t('hunt.mushroomLabel'));
    });

    $('#journal').innerHTML = items.map(function (it, i) {
      var on = !!found[i], s = SHROOMS[i];
      return '<li class="journal__item' + (on ? '' : ' is-hidden') + '">' +
        '<svg class="journal__icon" viewBox="0 0 60 80" aria-hidden="true" focusable="false"><use href="#' + s.sym + '"/></svg>' +
        '<span class="journal__name">' + esc(on ? it.name : t('hunt.unknown')) + '</span>' +
        '<span class="journal__latin">' + (on ? esc(it.latin) : '&nbsp;') + '</span>' +
        '<p class="journal__note">' + (on ? esc(it.note) : '') + '</p></li>';
    }).join('');
  }

  $('#huntReset').addEventListener('click', function () {
    found = {};
    $('#huntDone').hidden = true;
    restoreScene(); renderHunt();
    $('#huntToast').classList.remove('is-on');
    $('#hunt').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* =============================================================== SKY */
  var BORN = function () { return new Date(CFG.birth.year, CFG.birth.month - 1, CFG.birth.day); };
  var SYNODIC = 29.530588853;

  function moonFraction(date) {
    var ref = Date.UTC(2000, 0, 6, 18, 14);
    var age = ((date.getTime() - ref) / 864e5) % SYNODIC;
    if (age < 0) age += SYNODIC;
    return age / SYNODIC;
  }
  function phaseIndex(f) {
    if (f < 0.03 || f >= 0.97) return 0;
    if (f < 0.22) return 1;
    if (f < 0.28) return 2;
    if (f < 0.47) return 3;
    if (f < 0.53) return 4;
    if (f < 0.72) return 5;
    if (f < 0.78) return 6;
    return 7;
  }
  function moonSVG(f) {
    var k = (1 - Math.cos(2 * Math.PI * f)) / 2, waxing = f < 0.5, R = 50;
    var rx = Math.abs(1 - 2 * k) * R, crescent = k < 0.5, lit = '';
    if (k > 0.995) lit = '<circle cx="60" cy="60" r="50" fill="url(#moonLit)"/>';
    else if (k > 0.005) {
      lit = '<path d="M60 10A50 50 0 0 1 60 110A' + rx.toFixed(2) + ' 50 0 0 ' + (crescent ? 0 : 1) + ' 60 10Z" fill="url(#moonLit)"' +
        (waxing ? '' : ' transform="translate(120 0) scale(-1 1)"') + '/>';
    }
    return '<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">' +
      '<defs><radialGradient id="moonLit" cx="40%" cy="38%" r="80%"><stop offset="0" stop-color="#fff8e2"/><stop offset="1" stop-color="#d6caa6"/></radialGradient>' +
      '<radialGradient id="moonDark" cx="45%" cy="40%" r="80%"><stop offset="0" stop-color="#22302a"/><stop offset="1" stop-color="#101a15"/></radialGradient></defs>' +
      '<circle cx="60" cy="60" r="50" fill="url(#moonDark)" stroke="rgba(234,223,200,.22)"/>' + lit +
      '<g fill="#000" opacity=".07"><circle cx="46" cy="44" r="9"/><circle cx="72" cy="68" r="12"/><circle cx="52" cy="80" r="6"/><circle cx="76" cy="38" r="5"/></g>' +
      '</svg>';
  }

  function num(n) { return '<span class="num">' + n + '</span>'; }
  function renderSky() {
    var now = new Date(), born = BORN(), ms = now - born;
    var days = Math.floor(ms / 864e5), age = ageInfo(now).age;
    $('#skyDays').innerHTML = t('sky.days', { n: num(nf(days)) });
    $('#skyLive').innerHTML = t('sky.live', { n: '<span class="num" id="liveSecs">' + nf(Math.floor(ms / 1000)) + '</span>' });
    $('#skyOrbits').innerHTML = t('sky.orbits', { n: num(nf(age)) });
    $('#skyMoons').innerHTML = t('sky.moons', { n: num(nf(Math.floor(days / SYNODIC))) });

    var f = moonFraction(new Date(Date.UTC(CFG.birth.year, CFG.birth.month - 1, CFG.birth.day, 12)));
    $('#moon').innerHTML = moonSVG(f);
    $('#moon').setAttribute('aria-label', t('sky.moonAlt') + ': ' + t('sky.phases')[phaseIndex(f)]);
    $('#moonCaption').textContent = t('sky.moonCaption', { phase: t('sky.phases')[phaseIndex(f)] });
  }
  function tickSky() {
    var el = $('#liveSecs');
    if (el) el.textContent = nf(Math.floor((new Date() - BORN()) / 1000));
  }

  /* ========================================================== GALLERY */
  var galleryFilter = 'all', shown = [], lbIndex = 0;

  function renderFilters() {
    var names = t('gallery.filters'), present = { all: true };
    CFG.photos.forEach(function (p) { present[p.group] = true; });
    var box = $('#filters');
    box.innerHTML = Object.keys(names).filter(function (k) { return present[k]; }).map(function (k) {
      return '<button class="filter" type="button" data-f="' + k + '" aria-pressed="' + (k === galleryFilter) + '">' + esc(names[k]) + '</button>';
    }).join('');
    $$('.filter', box).forEach(function (b) {
      b.addEventListener('click', function () { galleryFilter = b.getAttribute('data-f'); renderFilters(); renderShots(); });
    });
  }

  // "All" view: take one photo from each group in turn so the page stays varied.
  function mixedPhotos() {
    var order = [], byGroup = {}, out = [];
    CFG.photos.forEach(function (p) {
      if (!byGroup[p.group]) { byGroup[p.group] = []; order.push(p.group); }
      byGroup[p.group].push(p);
    });
    for (var i = 0; out.length < CFG.photos.length; i++) {
      order.forEach(function (g) { if (byGroup[g][i]) out.push(byGroup[g][i]); });
    }
    return out;
  }

  function renderShots() {
    var box = $('#shots');
    shown = galleryFilter === 'all' ? mixedPhotos() : CFG.photos.filter(function (p) { return p.group === galleryFilter; });
    box.innerHTML = '';
    shown.forEach(function (p, i) {
      var fig = document.createElement('figure');
      fig.className = 'shot';
      fig.innerHTML = '<button class="shot__btn" type="button" aria-label="' + esc(t('gallery.open', { cap: loc(p.cap) })) + '">' +
        '<img src="' + esc(p.src) + '" width="' + p.w + '" height="' + p.h + '" alt="' + esc(loc(p.alt)) + '" loading="lazy" decoding="async"></button>' +
        '<figcaption>' + esc(loc(p.cap)) + '</figcaption>';
      $('.shot__btn', fig).addEventListener('click', function () { openLightbox(i); });
      box.appendChild(fig);
    });
  }

  var lb = $('#lightbox');
  function showLightbox(i) {
    if (!shown.length) return;
    lbIndex = (i + shown.length) % shown.length;
    var p = shown[lbIndex];
    var img = $('#lbImg');
    img.src = p.src; img.alt = loc(p.alt);
    $('#lbCap').textContent = loc(p.cap);
    $('#lbCount').textContent = t('gallery.counter', { n: lbIndex + 1, t: shown.length });
    var nxt = shown[(lbIndex + 1) % shown.length]; if (nxt) new Image().src = nxt.src;
  }
  function openLightbox(i) { showLightbox(i); if (!lb.open) lb.showModal(); }
  $('#lbClose').addEventListener('click', function () { lb.close(); });
  $('#lbPrev').addEventListener('click', function () { showLightbox(lbIndex - 1); });
  $('#lbNext').addEventListener('click', function () { showLightbox(lbIndex + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); showLightbox(lbIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); showLightbox(lbIndex + 1); }
  });

  /* ============================================================ PARTY */
  function renderParty() {
    var p = CFG.party || {}, box = $('#partyBody');
    var rows = [['party.when', p.when], ['party.where', p.where], ['party.note', p.note]].filter(function (r) { return r[1]; });
    if (!rows.length) { box.innerHTML = '<p class="party__secret">' + esc(t('party.secret')) + '</p>'; return; }
    var html = '<dl class="party__list">' + rows.map(function (r) {
      return '<div class="party__row"><dt>' + esc(t(r[0])) + '</dt><dd>' + esc(loc(r[1])) + '</dd></div>';
    }).join('') + '</dl>';
    if (p.mapUrl && /^https:\/\//.test(p.mapUrl)) {
      html += '<p class="party__map"><a class="btn btn--ghost" href="' + esc(p.mapUrl) + '" target="_blank" rel="noopener">' + esc(t('party.map')) + '</a></p>';
    }
    box.innerHTML = html;
  }

  /* ============================================================= WISH */
  var wishLit = true;
  function renderWish() {
    var btn = $('#wishCandle');
    btn.classList.toggle('is-lit', wishLit);
    btn.classList.toggle('is-blown', !wishLit);
    btn.disabled = !wishLit;
    btn.setAttribute('aria-label', t('wish.blowLabel'));
    $('#wishDone').textContent = wishLit ? '' : t('wish.done');
    $('#wishRelight').hidden = wishLit;
  }
  function blowWish() {
    if (!wishLit) return;
    var ember = $('#wishCandle .candle__ember').getBoundingClientRect();
    wishLit = false;
    renderWish();
    fx.burst(ember.left + ember.width / 2, ember.top - 10, { count: 90, speed: 3.2, rise: true, life: 150 });
    if (soundOn) { try { tone(392, 0, 1.4, 0.03, 'triangle'); tone(587, 0.2, 1.6, 0.025, 'triangle'); } catch (e) { /* no audio */ } }
  }
  $('#wishCandle').addEventListener('click', blowWish);
  $('#wishRelight').addEventListener('click', function () { wishLit = true; renderWish(); $('#wishCandle').focus(); });

  /* ======================================================== FIREFLIES */
  function initFireflies() {
    var c = $('#heroFireflies'), ctx = c.getContext('2d'), w = 0, h = 0, flies = [], raf = 0, visible = true;
    function resize() {
      var r = c.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height; c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(56, Math.max(18, w / 24)));
      flies = [];
      for (var i = 0; i < n; i++) {
        flies.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 + 0.7,
          ph: Math.random() * 6.28, sp: Math.random() * 0.0006 + 0.0003, vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.1 });
      }
      if (reduceMotion) draw(1000);
    }
    function draw(ts) {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      flies.forEach(function (f) {
        if (!reduceMotion) {
          f.x += f.vx + Math.sin(ts * f.sp + f.ph) * 0.25;
          f.y += f.vy + Math.cos(ts * f.sp * 1.3 + f.ph) * 0.18;
          if (f.x < -10) f.x = w + 10; if (f.x > w + 10) f.x = -10;
          if (f.y < -10) f.y = h + 10; if (f.y > h + 10) f.y = -10;
        }
        var a = 0.2 + 0.8 * Math.max(0, Math.sin(ts * f.sp * 3 + f.ph)), R = f.r * 7;
        var g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, R);
        g.addColorStop(0, 'rgba(255,216,138,' + a.toFixed(3) + ')');
        g.addColorStop(1, 'rgba(244,169,60,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(f.x, f.y, R, 0, 6.2832); ctx.fill();
      });
    }
    function loop(ts) { draw(ts); raf = visible ? requestAnimationFrame(loop) : 0; }
    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(c); else window.addEventListener('resize', resize);
    if (!reduceMotion) {
      var io = new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(loop);
      });
      io.observe($('#top'));
      raf = requestAnimationFrame(loop);
    }
  }

  /* ============================================================== BOOT */
  function renderAll() {
    applyStatic();
    renderGate();
    if (siteBooted) {
      renderCards(); renderHunt(); renderSky(); renderFilters(); renderShots(); renderParty(); renderWish();
    }
  }

  function bootSite() {
    if (siteBooted) return;
    siteBooted = true;
    buildHeroTrees();
    buildScene();
    renderCards(); renderHunt(); renderSky(); renderFilters(); renderShots(); renderParty(); renderWish();
    initFireflies();
    setInterval(tickSky, 1000);
  }

  $('#gateCandle').innerHTML = candleSVG('g');
  $('#wishCandle').innerHTML = candleSVG('w');

  $('#langBtn').addEventListener('click', function () {
    lang = lang === 'hu' ? 'en' : 'hu';
    store.set('flora-lang', lang);
    renderAll();
  });
  $('#soundBtn').addEventListener('click', function () {
    soundOn = !soundOn;
    store.set('flora-sound', soundOn ? 'on' : 'off');
    updateSoundBtn();
    if (soundOn) blip(1);
  });

  if (/[?&]lock\b/.test(window.location.search)) store.del('flora-unlocked');
  renderAll();

  if (!gateSteps().length || store.get('flora-unlocked') === '1') {
    unlock(false);
  } else {
    // Warm the hero photo while she is busy with the lyrics.
    new Image().src = $('#heroImg').getAttribute('src');
    setTimeout(function () { gateInput.focus({ preventScroll: true }); }, 400);
  }
})();
