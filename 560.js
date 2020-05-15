/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count =0;
  for(let i=0;i<nums.length;i++) {
      let sum = 0;
      for(let j=i;j>=0;j--){
          sum  += nums[j]
          if(k === sum) count++;
      }
  }
  return count;
};