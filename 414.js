/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let set = new Set(nums)
  let arr = [...set]
  arr=arr.sort((a,b) => b-a)
  if(arr.length<3) return arr[0];
  else return arr[2]
};