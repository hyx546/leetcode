/**
 * 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
 */
const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];


const unique = function (arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(unique(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }

    return result;
};

function uniqueArray(arr) {
    const result = unique(arr);
    result.sort((a, b) => a - b);
    return [...new Set(result)];
}

console.log(uniqueArray(arr));