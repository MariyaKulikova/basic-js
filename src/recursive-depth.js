import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }

    let maxNested = 0;
    let currNested = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currNested = 1 + this.calculateDepth(arr[i]);
      } else {
        currNested = 1;
      }
      if (currNested > maxNested) {
        maxNested = currNested;
      }
    }

    return maxNested;
  }
}
