/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = cur = prev = nums[0];
  for(let i =1;i<nums.length;i++){
      cur = prev>=0?prev+nums[i]:nums[i];
      prev = cur;
      sum = Math.max(sum,cur)
  }
  return sum
};