/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
;
function sum(str) {
    const arr = ('' + str).split('');
    return arr.reduce((a, b) => a + (+b), 0);
}
var countBalls = function (lowLimit, highLimit) {
    const map = new Map();
    let maxNum = 0;

    while (lowLimit <= highLimit) {
        const count = sum(lowLimit);

        const num = (map.get(count) || 0) + 1;
        maxNum = Math.max(maxNum, num);
        map.set(count, num);
        lowLimit++;
    }
    return maxNum;
};

console.log(sum('321'));

console.log(countBalls(lowLimit = 1, highLimit = 10));