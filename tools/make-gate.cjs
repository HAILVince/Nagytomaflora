#!/usr/bin/env node
/*
 * Turns lyrics into the hashed "answer" arrays used by js/config.js.
 *
 *   node tools/make-gate.cjs "first line of the lyrics" "second line" ...
 *
 * Every argument becomes one gate step. Paste the printed arrays into the
 * matching step's `answer:` field in js/config.js. The lyrics themselves are
 * never written to any file.
 */
'use strict';
const path = require('path');
const { hashAnswer, words } = require(path.join(__dirname, '..', 'js', 'gate-core.js'));

const lines = process.argv.slice(2);
if (!lines.length) {
  console.error('Usage: node tools/make-gate.cjs "lyrics for step 1" "lyrics for step 2" ...');
  process.exit(1);
}

lines.forEach((line, i) => {
  console.log(`// Step ${i + 1}: ${words(line).length} words`);
  console.log(`answer: ${JSON.stringify(hashAnswer(line))},`);
  console.log('');
});
