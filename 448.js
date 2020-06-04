/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  let arr = []
  for(let i=1;i<=len;i++) {
      if(nums.indexOf(i) === -1) {
          arr.push(i)
      }
  }
  return arr
};