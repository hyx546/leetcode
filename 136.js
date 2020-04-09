/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums=nums.sort();
  for (let index = 0; index < nums.length; index++) {
    if(nums[index]!==nums[index-1] && nums[index] !==nums[index+1])
      return nums[index];
  }
};

singleNumber([2,2,1])