/**
 * 795. 区间子数组个数
 * 将符合小于等于right的个数 - 小于left的个数
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
    const count = (nums, lower) => {
        let res = 0, sum = 0;
        for (const item of nums) {
            sum = item <= lower ? sum + 1 : 0;
            res += sum;
        }
        return res;
    };

    return count(nums, right) - count(nums, left - 1);
};

console.log(numSubarrayBoundedMax(nums = [73, 55, 36, 5, 55, 14, 9, 7, 72, 52], left = 32, right = 69));