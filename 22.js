/**
 * @param {number} n
 * @return {string[]}
 */
var brace = {
  '(': ')',
  ')': '('
}
var generateParenthesis = function(n) {

};
var child = function(str) {
  let nums = [];
  let count = 0;
  for(let n of str) {
      if(brace[n] !== nums[nums.length-1]){
          nums.push(n)
      }
      else{
          nums.pop()
          count++;
      }
  }
  // return nums.length === 0? true: false;
  console.log(nums.length === 0? count: false);
}
child("((()))")