/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max =nums[0],len=nums.length;
  for(let i=0;i<len;i++) {
      if(max < i) return false;
      if(max > len) return true;
      else{
          max = Math.max(max,i+nums[i])
      }
  }
  return true
};