/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let arr =[],news=[]
  nums = nums.sort((a,b) => a-b)
  for(let i=0;i<nums.length;i++){
      if(nums.lastIndexOf(nums[i])-nums.indexOf(nums[i]) <1) arr.push(nums[i])
  }
  return arr
};