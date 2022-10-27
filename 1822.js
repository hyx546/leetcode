/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    // const test = (num) => {
    //     if (num === 0) return 0;
    //     else if (num > 0) return 1;
    //     return -1;
    // };
    // const sum = nums.reduce((a, b) => test(a) * test(b), 1);
    // return test(sum);
    let flag = 1;
    for (let item of nums) {
        if (item === 0) return 0;
        if (item < 0) flag = -flag;
    }
    return flag;
};
console.log(arraySign([-1, 1, -2]));