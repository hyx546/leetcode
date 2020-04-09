/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g,"")
  s=s.toLowerCase();
  for(let i =0 ;i<s.length;i++) {
    if(s[i]!== s[s.length-i-1]) return false
  }
  return true;
};
isPalindrome("A man, a plan, a canal: Panama")