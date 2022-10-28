/**
 * 33. 搜索旋转排序数组
 * logn
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(((left + right) / 2));
    console.log(mid, nums[mid]);
    if (nums[mid] === target) return mid;
    // 右边有序的
    if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else {
      // 左边是有序的
      if (nums[mid] > target && target >= nums[left]) {
        right = mid;
      }
      else {
        left = mid + 1;
      }
    }
  }
  return -1;
};

console.log(search(nums = [3, 5, 1], target = 3));