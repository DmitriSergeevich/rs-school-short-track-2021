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
  // throw new Error('Not implemented');
  const myFunc = (num) => Number(num);
  const newArr = Array.from(String(n), myFunc);
  const sum = newArr.reduce((e, accum) => accum + e);
  return n < 10 ? sum : getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
