import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  const cat ='^^';
  let catCounter = 0;

  matrix.forEach(backyard => {
    backyard.forEach(el => {
      if (el === cat) {
        catCounter += 1;
      }
    });
  });

  return catCounter;
}
