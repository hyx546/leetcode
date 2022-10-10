/**
 * 46. 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [], path = [];
    dfs(nums,nums.length,[]);
    return result;


    /**
     * used 是布尔数组
     * 用来判断path中是否已经存在
     * 是一种以空间换时间的方式，以O(1)的时间复杂度来判断
     */
    function dfs(n,k,used) {
        if(path.length === k){
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < k; i++) {
            if(used[i]) continue;
             used[i] = true;
            path.push(nums[i]);
            dfs(n,k,used);
            path.pop();
            used[i] = false;
        }
    }
};


const nums = [1,2,3];
console.log('====================================');
console.log(permute(nums));
console.log('====================================');