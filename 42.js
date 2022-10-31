/**
 * 42. 接雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum = 0;
    for (let index = 0; index < height.length; index++) {
        let leftMax = 0, rightMax = 0;
        for (let i = index - 1; i >= 0; i--) {
            leftMax = Math.max(height[i], leftMax);
        }

        for (let j = index + 1; j < height.length; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        const min = Math.min(leftMax, rightMax);
        if (min > height[index]) {
            sum += (min - height[index]);
        }
    }
    return sum;
};

console.log('====================================');
console.log(trap(height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log('====================================');