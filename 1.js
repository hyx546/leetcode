/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  1.用目标值减去当前索引的值，
//  2.查找数组中是否有该值并且同一个元素只能使用1遍
var twoSum = function(nums, target) {
  for(let i=0;i<nums.length;i++){
      const n = target-nums[i];
      if(nums.indexOf(n)!==i &&nums.indexOf(n)!== -1){
          return [i,nums.indexOf(n)]
      }
  }
};

// 哈希算法
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i=0;i<nums.length;i++){
      let n2 = target - nums[i];
      if(map.has(n2)){
          return [map.get(n2),i];
      }
      map.set(nums[i],i)
  }
};