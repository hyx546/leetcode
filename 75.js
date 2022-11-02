/**
 * 75. 颜色分类
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let head = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[head]] = [nums[head], nums[i]];
            head++;
        }
    }

    for (let i = head; i < len; i++) {
        if (nums[i] === 1) {
            [nums[i], nums[head]] = [nums[head], nums[i]];
            head++;
        }
    }

    return nums;
};


console.log(sortColors(nums = [1, 2, 0]));