/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let max = 0
let dp = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1).fill(0))

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    if (A[i] === B[j]) {
      dp[i + 1][j + 1] =dp[i][j]+1
      max = Math.max(dp[i + 1][j + 1], max)
    }
  }
}
return max
};