// 59 - I. 滑动窗口的最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if(!nums.length) return []
  let res = [];
  for(let i=0;i<=nums.length-k;i++){
      const max = Math.max(...nums.slice(i,i+k));
      res.push(max);
  }

  return res;
};