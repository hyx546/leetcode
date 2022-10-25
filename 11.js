/**
 * 11. 盛最多水的容器
 * 双指针法， 时间复杂度O(n),空间复杂度O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = left = 0, right = height.length - 1;
    while (left <= right) {
        const area = (Math.min(height[left], height[right])) * (right - left);
        max = Math.max(max, area);
        height[right] >= height[left] ? left++ : right--;
    }
    return max;
};



console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));