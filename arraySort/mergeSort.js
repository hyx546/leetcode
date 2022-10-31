function merge(leftArr, rightArr) {
    const temp = [];
    while (leftArr.length && rightArr.length) {
        temp.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
    }
    return temp.concat(leftArr, rightArr);
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const middleIndex = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, middleIndex)), mergeSort(arr.slice(middleIndex)));
}


console.log(mergeSort(arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));