/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let result = -1;
  let firstElement = 0;
  let lastElement = array.length - 1;

  let isFounded = false;

  let middle;

  while (isFounded === false && firstElement <= lastElement) {
    middle = Math.floor((firstElement + lastElement) / 2);
    if (array[middle] === value) {
      isFounded = true;
      result = middle;
    } else if (array[middle] > value) {
      lastElement = middle - 1;
    } else {
      firstElement = middle + 1;
    }
  }

  return result;
}

module.exports = findIndex;
