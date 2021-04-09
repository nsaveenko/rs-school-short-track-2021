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
function deleteDigit(n) {
  let removeElement = 0;
  const result = [];

  const arr = n.toString().split('').map(Number);

  const maxElement = arr.indexOf(Math.max(...arr));

  if (maxElement === 0) {
    removeElement = maxElement + 1;
  } else {
    removeElement = maxElement - 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== removeElement) {
      result.push(arr[i]);
    }
  }

  return +result.join('');
}

module.exports = deleteDigit;
