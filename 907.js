/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    let sum = 0;
    let mod = 10 ** 9 + 7;
    for (let i = 0; i < arr.length; i++) {
        let arrSum = 0;
        let min = arr[i];
        for (let j = i; j < arr.length; j++) {
            min = Math.min(min, arr[j]);
            arrSum += min;
        }
        sum += arrSum;
    }
    return sum % mod;
};


console.log(sumSubarrayMins(arr = [11, 81, 94, 43, 3]));