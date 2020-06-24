/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => a-b)
  let res = nums[0] + nums[1] +nums[2];
  let n = nums.length;
  for(let i=0;i<n;i++){
      let l = i+1;
      let r = n-1;
      while(l < r) {
          const sum = nums[i] + nums[l] +nums[r];
          if(Math.abs(res-target) > Math.abs(sum-target)){
              res = sum;
          }else if(sum > target){
              r--;
          }else if (sum < target){
              l++;
          }else if (sum == target){
              return res
          }
      }
  }
  return res
};
