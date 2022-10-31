/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0], len = nums.length;
  for (let i = 0; i < len; i++) {
    if (max < i) return false;
    if (max >= len - 1) return true;
    max = Math.max(max, i + nums[i]);
  }
  return true;
};
console.log(canJump(nums = [2, 3, 1, 1, 4]));