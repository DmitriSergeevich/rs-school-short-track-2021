/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.filter((e) => e !== -1);
  const pushArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      const min = Math.min.apply(null, newArr);
      pushArr.push(min);
      newArr.splice((newArr.indexOf(min)), 1);
    } else {
      pushArr.push(arr[i]);
    }
  } return pushArr;
}

module.exports = sortByHeight;
