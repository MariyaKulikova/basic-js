import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digit = String(n).split('');
  const result = [];
  for (let i = 0; i < digit.length; i++) {
    const string = [];
    for (let j = 0; j < digit.length; j++) {
      if (i !== j) {
        string.push(digit[j]);
      }
    }
    result.push(parseInt(string.join(''), 10));
  }

  return Math.max(...result);
}
