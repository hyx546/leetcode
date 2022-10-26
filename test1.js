/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let a = 0; a < nums.length - 2; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        let b = a + 1, c = nums.length - 1;
        while (b < c) {
            const isQquality = nums[a] + nums[b] + nums[c];
            if (isQquality === 0) {
                res.push([nums[a], nums[b], nums[c]]);
                while (b < c && nums[b] === nums[b + 1]) {
                    b++;
                }
                while (b < c && nums[c] === nums[c - 1]) {
                    c--;
                }
                b++;
                c--;
            }
            else if (isQquality < 0) b++;
            else c--;
        }
    }
    return res;
};

console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4]));