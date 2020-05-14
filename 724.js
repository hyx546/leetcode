/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = nums.reduce(((i,j) => i+j),0)
  let leftsum = 0
  return nums.findIndex((item,index) => {
      if(sum - item - leftsum === leftsum) return true
      leftsum += item
  })
};