/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let arr = new Set();
  for(let i=0;i<nums.length;i++) {
      if(arr.has(nums[i])) return true
      arr.add(nums[i]);
      if(arr.size > k) {
          arr.delete(nums[i-k]);
      }
  }
  return false
};