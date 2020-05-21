/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let arr =nums.slice(0,nums.length);
  nums.sort((a,b) => a-b)
  return arr.indexOf(nums[nums.length-1])
};