/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new Error('Not implemented');
  const arr = n.split('-');
  const filteredArr = arr.filter((e) => e.length === 2);
  if (arr.length < 6 || filteredArr.length < 6) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if ((/^[а-яА-ЯёЁg-zG-Z0-9_]+$/).test(arr[i])) {
      return false;
    }
  } return true;
}

module.exports = isMAC48Address;
