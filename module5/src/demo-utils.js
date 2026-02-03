'use strict';

const {
  capitalize,
  truncate,
  countWords,
  clamp,
  isPrime,
  factorial,
  sum,
  average,
} = require('./utils/utils');

console.log('--- capitalize ---');
console.log(capitalize('hello'), '=> "Hello"');
console.log(capitalize(''), '=> ""');
console.log(capitalize('čau'), '=> "Čau"');

console.log('\n--- truncate ---');
console.log(truncate('Hello world', 8), '=> "Hello..."');
console.log(truncate('Hi', 8), '=> "Hi"');
console.log(truncate('abcdef', 3), '=> "..."');

console.log('\n--- countWords ---');
console.log(countWords('Hello world'), '=> 2');
console.log(countWords('  a   b  c '), '=> 3');
console.log(countWords(''), '=> 0');

console.log('\n--- clamp ---');
console.log(clamp(5, 1, 10), '=> 5');
console.log(clamp(-2, 0, 10), '=> 0');
console.log(clamp(999, 0, 100), '=> 100');

console.log('\n--- isPrime ---');
console.log(isPrime(2), '=> true');
console.log(isPrime(9), '=> false');
console.log(isPrime(97), '=> true');

console.log('\n--- factorial ---');
console.log(factorial(0), '=> 1');
console.log(factorial(5), '=> 120');
console.log(factorial(3), '=> 6');

console.log('\n--- sum ---');
console.log(sum([1, 2, 3]), '=> 6');
console.log(sum([]), '=> 0');
console.log(sum([10, -5]), '=> 5');

console.log('\n--- average ---');
console.log(average([2, 4, 6]), '=> 4');
console.log(average([10]), '=> 10');
console.log(average([]), '=> NaN');