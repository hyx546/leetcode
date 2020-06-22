/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length
  let dp =[];
  dp[0] = true;
  for(let i=0;i<len;i++) {
      for( let j =i+1;j<=len;j++) {
          if(dp[i] && wordDict.indexOf(s.substring(i,j)) > -1) {
              dp[j] = true
          }
      }
  }
  return dp[len] ? true : false
};
