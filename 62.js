// 空间复杂度O(mn) 时间复杂度O(mn)
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(1));
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          dp[i][j] = dp[i-1][j]+dp[i][j-1];
      }
  }
  return dp[m-1][n-1]
};

// 空间复杂度O(n) 时间复杂度O(mn)
var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          dp[j] = dp[j] + dp[j - 1];
      }
  }
  return dp[n - 1]
};
console.log(uniquePaths(3,3));