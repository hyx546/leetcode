const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];


function merge(left, right) {
    const arrList = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrList.push(left.shift());
        }
        else {
            arrList.push(right.shift());
        }
    }
    return arrList.concat(left, right);
}


function test(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(test(arr.slice(0, mid)), test(arr.slice(mid)));
}

console.log('====================================');
console.log(test(arr));
console.log('====================================');