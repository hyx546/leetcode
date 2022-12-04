/**
 * 剑指 Offer 57 - II. 和为s的连续正数序列
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let i = j = 1;
    const result = [];
    let sum = 0;

    while (i < target / 2) {
        if (sum < target) {
            sum += j++;
        }
        else if (sum > target) {
            sum -= i++;
        }
        else {
            const arr = [];
            for (let k = i; k < j; k++) {
                arr.push(k);
            }
            result.push(arr);
            sum -= i++;
        }
    }

    return result;
};


console.log(findContinuousSequence(target = 9));