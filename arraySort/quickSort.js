function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const baseIndex = Math.floor(Math.length / 2);

    const baseValue = arr.splice(baseIndex, 1)[0];
    const left = [], right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < baseValue) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    };

    return quickSort(left).concat(baseValue, quickSort(right));
}

console.log(quickSort(arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));