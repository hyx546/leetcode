/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a,b) => (''+b+a) - (''+a+b))
  return nums.join('')
};
// var largestNumber = function(nums) {
//   nums.sort((a, b) => +('' + b + a) - +('' + a + b));
//   return nums.join('')[0] === '0' ? '0' : nums.join('');
// };

largestNumber([3,30,34,5,9])