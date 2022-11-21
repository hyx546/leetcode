/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    console.log(boxTypes);
    for (let i = 0; i < boxTypes.length; i++) {
        const item = boxTypes[i];
        if (item[0] < truckSize) {
            console.log(item[0] * item[1], item[0], item[1]);
            res += item[0] * item[1];
            truckSize -= item[0];
        } else {
            console.log(item[1] * truckSize, item[1], truckSize);
            res += item[1] * truckSize;
            break;
        }
    }
    return res;
};

console.log(maximumUnits(boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize = 10));