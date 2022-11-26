/**
 * 581. 最短无序连续子数组
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    if (sortFn(nums)) return 0;
    let left = 0, right = nums.length - 1;
    const newArr = [...nums].sort((a, b) => a - b);

    while (nums[left] === newArr[left]) {
        left++;
    }
    while (nums[right] === newArr[right]) {
        right--;
    }
    return right - left + 1;
};

function sortFn(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(findUnsortedSubarray(nums = [2, 6, 4, 8, 10, 9, 15]));