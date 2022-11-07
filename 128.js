/**
 * 128. 最长连续序列
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let maxLen = 0;
    const numSet = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (!numSet.has(nums[i] - 1)) {
            let curLen = 1;
            let curData = nums[i];
            while (numSet.has(curData + 1)) {
                curLen++;
                curData++;
            }
            maxLen = Math.max(maxLen, curLen);
        }
    }
    return maxLen;
};

console.log(longestConsecutive(nums = [100, 4, 200, 1, 3, 2]));