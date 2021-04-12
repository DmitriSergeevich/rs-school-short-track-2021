/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  let sum = 0;
  let i = 0;
  const stop = matrix[0].length;
  for (let j = 0; j < stop; j++) {
    i = 0;
    while (i < matrix.length) {
      if (matrix[i][j] !== 0) {
        sum += matrix[i][j];
        i++;
      } else {
        i = matrix.length;
      }
    }
  } return sum;
}

module.exports = getMatrixElementsSum;
