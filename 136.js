/**
 * @param {number[]} nums
 * @return {number}
 */

// var singleNumber = function(nums) {
//   nums=nums.sort();
//   for (let index = 0; index < nums.length; index++) {
//     if(nums[index]!==nums[index-1] && nums[index] !==nums[index+1])
//       return nums[index];
//   }
// };

// 异或算法
// a ^ a = 0;
// a ^ 0 = a;
var singleNumber = function(nums) {
  let ans = 0;
  for(let num of nums){
      ans ^= num
  }
  return ans
};

// reduce
var singleNumber = function(nums) {

  return nums.reduce((total,current) => total ^=current)
};


singleNumber([2,2,1])