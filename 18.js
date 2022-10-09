/**
 * 18. 四数之和
 * https://leetcode.cn/problems/4sum/
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * @param {*} nums 
 * @param {*} target 
 */

var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    const arr = [];
    for (let a = 0; a < nums.length-3; a++) {
        if(a>0 && nums[a]===nums[a-1]) continue;
        for (let b = a+1; b < nums.length-2; b++) {
            if(b>a+1 && nums[b]===nums[b-1]) continue;
            let c = b+1,d=nums.length-1;
            console.log(c,d);
            while(c<d){
                console.log(1,nums[a],nums[b],nums[c],nums[d]);
                if(nums[a]+nums[b] - target === -nums[c]-nums[d]){
                    arr.push([nums[a],nums[b],nums[c],nums[d]])
                    while(c<d && nums[c] === nums[c+1]){
                        c++;
                    }
                    while(c<d && nums[d] === nums[d-1]){
                        d--;
                    }
                    c++;
                    d--;
                }
                else if (nums[a]+nums[b] - target < -nums[c]-nums[d]){
                    c++;
                } else if (nums[a]+nums[b] - target > -nums[c]-nums[d]){
                    d--;
                }
            }
        }
    }
    return arr;
};

// const nums = [1,0,-1,0,-2,2], target = 0;
const nums = [2,2,2,2,2], target = 8

console.log('====================================');
console.log(fourSum(nums,target));
console.log('====================================');