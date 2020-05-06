/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i=1;i<nums.length;i++) {
      for(let j=0;j<=i;j++) {
          if(i!=j && Math.abs(nums[i]-nums[j]) <=t && i-j<=k){
              return true
          }
      }
      
  }
  return false
};