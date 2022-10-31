/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    const arr = [];
    nums.forEach(item => {
        if (item % 6 === 0) {
            arr.push(item);
        }
    });
    if (!arr.length) return 0;
    return Math.floor(arr.reduce((a, b) => a + b) / arr.length);
};


console.log(averageValue([4, 4, 9, 10]));