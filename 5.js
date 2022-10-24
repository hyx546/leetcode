/**
 * @param {string} s
 * @return {string}
 */

// 暴力破解
// var longestPalindrome = function (s) {
//     if (s.length < 2) return s;
//     const test = (s) => {
//         const len = s.length;
//         for (let i = 0; i < len / 2; i++) {
//             if (s[i] !== s[len - i - 1]) {
//                 return false;
//             }
//         }
//         return true;
//     };

//     let max = 0, res = '';

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             const str = s.slice(i, j);
//             if (str.length > max && test(str)) {
//                 max = str.length;
//                 res = str;
//             }
//         }
//     }
//     return res;

// };


// 动态规划
// var longestPalindrome = function (s) {
//     if (s.length < 2) return s;
//     let ans = s[0];
//     const n = s.length;
//     const dp = Array.from(new Array(n), () => new Array(n).fill(false));
//     for (let i = 0; i < n; i++) {
//         dp[i][i] = true;
//     }

//     // 子串长度;
//     for (let childLen = 2; childLen <= n; childLen++) {
//         for (let i = 0; i < n; i++) {
//             const j = i + childLen - 1;
//             if (j >= n) break;
//             if (childLen === 2) {
//                 dp[i][j] = s[i] === s[j];
//             }
//             else {
//                 dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
//             }
//             if (dp[i][j] && j - i + 1 > ans.length) {
//                 ans = s.slice(i, j + 1);
//             }
//         }
//     }
//     return ans;
// };

// 中心发散法
var longestPalindrome = function (s) {
    let maxStr = s[0];
    let l = r = 0;

    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        l = i - 1;
        while (s[i] === s[i + 1]) {
            str += s[i + 1];
            i++;
        }
        r = i + 1;
        while (s[l] && s[l] === s[r]) {
            str = s[l] + str + s[r];
            l--;
            r++;
        }
        if (str.length > maxStr.length) {
            maxStr = str;
        }
    }
    return maxStr;
};

console.log(longestPalindrome("cc"));