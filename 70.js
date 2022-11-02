/**
 * 70. 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // if (n === 1) return 1;
    // else if (n === 2) return 2;
    // const dp = [1, 2];
    // for (let i = 2; i < n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n - 1];

    let pre1 = 0, pre2 = 0, sum = 1;
    for (let i = 0; i < n; i++) {
        pre1 = pre2;
        pre2 = sum;
        sum = pre1 + pre2;
    }
    return sum;
};


console.log(climbStairs(4));