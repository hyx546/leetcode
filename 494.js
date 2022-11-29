/**
 * 494. 目标和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let count = 0;
    const dfs = (len, index, sum) => {
        if (len === index) {
            if (sum === target) {
                count++;
            }
            return;
        }

        dfs(len, index + 1, sum - nums[index]);
        dfs(len, index + 1, sum + nums[index]);
    };

    dfs(nums.length, 0, 0);
    return count;
};