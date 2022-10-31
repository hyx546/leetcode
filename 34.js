/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 时间复杂度 O(logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0, r = nums.length;
  let arr = [-1, -1];
  let index = -1;
  let lastIndex = nums.length;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] >= target) {
      r = mid - 1;
      index = mid;
    }
    else {
      l = mid + 1;
    }
  }

  l = 0, r = nums.length;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
      lastIndex = mid;
    }
    else {
      l = mid + 1;
    }
  }

  lastIndex--;
  if (index <= lastIndex && lastIndex < nums.length && nums[index] === target && nums[lastIndex] === target) {
    arr = [index, lastIndex];
  }

  return arr;
};

console.log(searchRange(nums = [1, 2, 3, 3, 3, 3, 4, 5, 9], target = 3));
