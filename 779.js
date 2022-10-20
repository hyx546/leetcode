/**
 * 779. 第K个语法符号
 * 使用倒推法， n行k列为1，倒推第一行是否等于0， 是则为1，否则为0
 * 偶数列为0，奇数列为1，则是由1演变的
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    const dfs = (n, k, cur) => {
        if (n === 1) return cur;
        else if ((k % 2 === 0 && cur === 0) || (k % 2 === 1 && cur === 1)) return dfs(n - 1, Math.floor((k - 1) / 2) + 1, 1);
        else return dfs(n - 1, Math.floor((k - 1) / 2) + 1, 0);
    };
    return dfs(n, k, 1) === 0 ? 1 : 0;
};


console.log(kthGrammar(30, 434991989));