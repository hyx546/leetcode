/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(" ")
  let nums=[];
  for(let i =0 ;i<arr.length;i++) {
    if(arr[i] !== ''){
      nums.push(arr[i])
    }
  }
  s=nums.reverse().join(' ')
  return s;
};

reverseWords("  hello world!  ")