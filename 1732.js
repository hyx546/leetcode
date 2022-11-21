/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let maxNum = Math.max(gain[0], 0), cur = 0;

    for (let i = 1; i < gain.length; i++) {
        cur = gain[i] = gain[i - 1] + gain[i];
        console.log(cur, gain[i - 1], gain[i]);
        maxNum = Math.max(cur, maxNum);
    }
    return maxNum;
};


console.log(largestAltitude(gain = [52, -91, 72]));