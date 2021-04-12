/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  const arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      for (let j = i; j < str.length; j++) {
        if (str[j] === str[j + 1]) {
          count++;
        } else {
          arr.push(1 + count + str[i]);
          i += count;
          count = 0;
          break;
        }
      }
    } else {
      arr.push(str[i]);
    }
  } return arr.join('');
}

module.exports = encodeLine;
