/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let left = right = max = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      left = map.get(s[i]) + 1;
    }
    console.log('====================================');
    console.log(left, i);
    console.log('====================================');
    max = Math.max(max, i - left + 1);
    map.set(s[i], i);
  }
  return max;
};

// var lengthOfLongestSubstring = function (s) {
//   let left = max = index = 0;
//   for (let i = 0; i < s.length; i++) {
//     index = s.slice(left,i).indexOf(s[i])
//     if(index == -1){
//       max = Math.max(max, i - left + 1)
//     }
//     else{
//       console.log(index);
//       console.log('---pre',left);
//       left += index+1;
//       console.log('----next',left);
//     }
//   }
//   return max
// };

console.log(lengthOfLongestSubstring('abba'));