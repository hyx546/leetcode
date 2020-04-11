/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(nums.length===1) return nums[0]
    nums = nums.sort((a,b) => (a-b))
    let count= 1;
    let max =0;
    for (let i = 1; i < nums.length; i++) {
      if(nums[i-1] === nums[i]){
        count++;
      }
      else{
        count = 1;
      }
      max = max < count? count :max;
      if(max>nums.length/2) {
        return nums[i-1]
      }
    }
};