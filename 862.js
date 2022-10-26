/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    let min = Infinity, flag = false;

    const sum = (n, k) => {
        return n.reduce((a, b) => a + b, 0) >= k;
    };

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            const arr = nums.slice(i, j);
            if (sum(arr, k)) {
                !flag && (flag = true);
                min = Math.min(min, j - i);
            }
        }

    }
    return flag ? min : -1;
};

console.log(shortestSubarray(nums = [48, 99, 37, 4, -31], k = 140));