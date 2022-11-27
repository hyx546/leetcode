/**
 * 1752. 检查数组是否经排序和轮转得到
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    const len = nums.length;
    let x = 0;
    for (let i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            x = i;
            break;
        }
    }
    if (x === 0) return true;
    for (let i = x + 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return nums[0] >= nums[len - 1];
};