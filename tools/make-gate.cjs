#!/usr/bin/env node
/*
 * Turns the answers into the hashed `answer` objects used by js/config.js.
 *
 *   node tools/make-gate.cjs "answer for step 1" "answer for step 2" ...
 *
 * Every argument becomes one gate step. Paste each printed `answer: {...}` into
 * the matching step in js/config.js. The answers themselves are never written
 * to any file.
 *
 * Add --try to test how forgiving a typed attempt is against an answer:
 *   node tools/make-gate.cjs --try "the real answer" "what she might type"
 */
'use strict';
const path = require('path');
const { hashAnswer, check, words } = require(path.join(__dirname, '..', 'js', 'gate-core.js'));

const args = process.argv.slice(2);

if (args[0] === '--try') {
  if (args.length !== 3) {
    console.error('Usage: node tools/make-gate.cjs --try "the real answer" "what she might type"');
    process.exit(1);
  }
  const result = check(args[2], hashAnswer(args[1]));
  console.log(result.exact ? 'ACCEPTED' : 'REJECTED', `(${result.matched} / ${result.total} words)`);
  process.exit(0);
}

if (!args.length) {
  console.error('Usage: node tools/make-gate.cjs "answer for step 1" "answer for step 2" ...');
  process.exit(1);
}

args.forEach((line, i) => {
  console.log(`// Step ${i + 1}: ${words(line).length} words`);
  console.log(`answer: ${JSON.stringify(hashAnswer(line))},`);
  console.log('');
});
