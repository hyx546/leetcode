/**
 * 47. 全排列 II
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * nums = [1,1,2]
 * [[1,1,2],[1,2,1],[2,1,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b);

    const result =[],path = [];

    dfs(nums,nums.length,[]);

    return result;

    function dfs(n,k,used) {
        if(path.length === k){
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < k; i++) {
            if(used[i] || (i>0 && nums[i] === nums[i-1]) && !used[i-1]){
                continue;
            }
            used[i] = true;
            path.push(nums[i])
            dfs(n,k,used);
            path.pop();
            used[i] = false;
        }
    }
};

console.log('====================================');
console.log(permuteUnique([1,3,2]));
console.log('====================================');