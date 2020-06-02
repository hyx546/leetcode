/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let newnums = nums.concat(nums);
  let i=-1;
  return nums.map(item => {
      i=i+1;
      for(let j=1;j<nums.length;j++) {
          if(newnums[i+j] > item) {
              return newnums[i+j]
          }
      }
      return -1
  })
};