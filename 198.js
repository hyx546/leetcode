/**
 * 198. 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    else if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        const temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
};

console.log(rob([2, 7, 9, 3, 1]));