/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digits = n.toString().split('').map(Number);

  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }

  const sumFigures = sum.toString().split('').map(Number);

  if (sumFigures.length === 2) {
    sum = 0;

    for (let i = 0; i < sumFigures.length; i++) {
      sum += sumFigures[i];
    }
  }

  return sum;
}

module.exports = getSumOfDigits;
