/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = Math.max(...nums)
  let index = nums.indexOf(max)
  nums = nums.filter(item => item*2 > max)
  return nums.length > 1? -1 : index
};