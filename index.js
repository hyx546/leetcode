/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 如果目标值存在返回下标，否则返回 -1
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
function search(nums, target) {
  // write code here
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] === target) {
      while (mid != 0 && nums[mid] === nums[mid - 1]) {
        mid -= 1;
      }
      return mid
    }
    else if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1
    }
  }
  return -1
}

console.log(search([1, 2, 2, 3, 4], 2));