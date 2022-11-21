/**
 * 18. 四数之和
 * https://leetcode.cn/problems/4sum/
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * @param {*} nums 
 * @param {*} target 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let a = 0; a < nums.length - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        for (let b = a + 1; b < nums.length - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;
            let l = b + 1, r = nums.length - 1;
            while (l < r) {
                if (nums[a] + nums[b] - target === -nums[l] - nums[r]) {
                    result.push(nums[a], nums[b], nums[l], nums[r]);
                    while (l < r && nums[l] === nums[l + 1]) {
                        l++;
                    }
                    while (l < r && nums[r] === nums[r - 1]) {
                        r--;
                    }
                    l++;
                    r--;
                }
                else if (nums[a] + nums[b] - target < -nums[l] - nums[r]) {
                    l++;
                }
                else {
                    r--;
                }
            }
        }
    }
    return result;
};

const nums = [1, 0, -1, 0, -2, 2], target = 0;
// const nums = [2,2,2,2,2], target = 8

console.log('====================================');
console.log(fourSum(nums, target));
console.log('====================================');