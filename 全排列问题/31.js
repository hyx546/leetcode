/**
 * 31. 下一个排列
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 必须 原地 修改，只允许使用额外常数空间。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let k = -1,l=-1;
    for (let i = nums.length - 2; i >=0; i--) {
        if(nums[i] < nums[i+1]){
            k = i;
            break;
        }
    }
    if(k === -1) return nums.reverse();
    for (let i = nums.length - 1; i >=0; i--) {
        if(nums[i] > nums[k]){
            l = i;
            break;
        }
    }

    [nums[k],nums[l]] = [nums[l],nums[k]];

    return nums.slice(0,k+1).concat(nums.slice(k+1).reverse());
};

console.log('====================================');
console.log(nextPermutation([1,3,2]));
console.log('====================================');