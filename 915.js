/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
    let leftPox = 0, curMax = nums[0], leftMax = nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        curMax = Math.max(curMax, nums[i]);
        if (nums[i] < leftMax) {
            leftMax = curMax;
            leftPox = i;
        }
    }
    return leftPox + 1;
};


console.log(partitionDisjoint(nums = [6, 0, 8, 30, 37, 6, 75, 98, 39, 90, 63, 74, 52, 92, 64]));