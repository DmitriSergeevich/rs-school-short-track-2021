/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const minStr = s1.length >= s2.length ? s1 : s2;
  const maxStr = (s1.length >= s2.length ? s2 : s1).split('');
  for (let i = 0; i < minStr.length; i++) {
    if (maxStr.indexOf(minStr[i]) !== -1) {
      counter++;
      maxStr.splice(maxStr.indexOf(minStr[i]), 1);
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
