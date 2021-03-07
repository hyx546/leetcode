/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 */

//  一个正向存储，一个逆向储存
//  O(n2) O(1)
// var countSubstrings = function (s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let left = "";
//     let right = "";
//     for (let j = i; j <s.length; j++) {
//       left += s[j];
//       right = s[j] + right;
//       if (left === right) {
//         count++
//       }
//     }
//   }
//   return count
// };


// 采用动态规划，ij表示字符串头尾，只要i+1和j-1的字串为回文，且s[i]===s[j]，也必为回文
// O(n2) O(n2)
// var countSubstrings = function (s) {
//   let count = 0;
//   const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false))
//   for (let j = 0; j < s.length; j++) {
//     for (let i = 0; i <= j; i++) {
//       if (i === j) {
//         dp[i][j] = true;
//         count++
//       } else if (j - i === 1 && s[j] === s[i]) {
//         dp[i][j] = true;
//         count++
//       } else if (j - i > 1 && s[j] === s[i] && dp[i+1][j-1]){
//         dp[i][j] = true;
//         count++
//       }
//     }
//   }
//   return count
// };


// 暴力
// O(n3) O(1)
function test(s){
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <s.length; j++) {
      if(test(s.slice(i,j+1))) count++;
    }
  }
  return count
};

console.log(countSubstrings("aaa"));