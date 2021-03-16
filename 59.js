/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let number = 1;
  let top = 0, left = 0, right = n - 1, bottom = n - 1;
  while (top <= bottom && left <= right) {
    for (let i = top; i <= right; i++) {
      arr[top][i] = number++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      arr[i][right] = number++;
    }
    right--;
    if (top > bottom || left > right) break;
      for (let i = right; i >= left; i--) {
        arr[bottom][i] = number++;
      }
    bottom--;
    for (let i = bottom; i >= top; i--) {
        arr[i][left] = number++;
    }
    left++;
  }
  return arr
};


console.log(generateMatrix(3));