/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 先平均，在比较
var findMaxAverage = function(nums, k) {
  let average = -Infinity;
  let start = 0;
  while(start < nums.length-k+1){
      const res = nums.slice(start,start+k);
      average = Math.max(average,res.reduce((total,value) => total+value,0)/k);
      start++;
  }
  return average
};

// 先求总和，再平均
var findMaxAverage = function(nums, k) {
  let sum = nums.slice(0,k).reduce((total,value) => total+value,0);
  let maxSum = sum;

  for(let i=0;i<nums.length-k;i++){
       sum = sum - nums[i] + nums[i+k];
       maxSum=Math.max(sum,maxSum)
  }
  return maxSum/k
};