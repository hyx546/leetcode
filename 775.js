/**
 * 775. 全局倒置与局部倒置
 * 判断是否存在非局部倒置
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
    const len = nums.length;
    let minNum = nums[len - 1];
    for (let i = len - 3; i >= 0; i--) {
        if (nums[i] > minNum) {
            return false;
        }
        minNum = Math.min(minNum, nums[i + 1]);
    }
    return true;
};

console.log(isIdealPermutation(nums = [1, 2, 0]));