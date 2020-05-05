/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums= nums.sort((a,b) => a-b);
  return nums.filter((item,index) => index%2===0).reduce((n1,n2) => n1+n2)
};