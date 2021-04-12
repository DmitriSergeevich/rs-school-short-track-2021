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
  // throw new Error('Not implemented');
  const arr = Array.from(String(n));
  const min = String(Math.min(...arr));
  const index = arr.indexOf(min);
  arr.splice(index, 1);
  return Number(arr.join(''));
}

module.exports = deleteDigit;
