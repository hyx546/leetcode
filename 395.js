/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestSubstring = function (s, k) {
  const test = (left, right) => {
    // 如果子串长度小于k，则不满足
    if (right - left + 1 < k) return 0;
    const obj = {};
    // 记录字符串s的每个字母出现的次数
    for (let i = left; i <=right; i++) {
      if (obj[s[i]]) {
        obj[s[i]]++;
      } else {
        obj[s[i]] = 1;
      }
    }
    // 当子串第一个字母不符合就left++
    while (right - left + 1 >= k && obj[s[left]]<k) {
      left++
    }

    // 当字串最后一个字母不符合就right--
    while (right - left + 1 >= k && obj[s[right]]<k) {
      right--;
    }
    
    if(right-left+1<k) return 0;

    // 字串中间字母不符合，就取该字母的两侧最大串
    for (let i = left; i <=right; i++) {
      if(s[i]<k){
        return Math.max(test(left,i-1),test(i+1,right))
      }
    }
    // 返回字串长度
    return right-left+1
  }
  return test(0, s.length - 1);
};

console.log(longestSubstring('ababac', 2));