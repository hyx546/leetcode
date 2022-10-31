function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const left = [], right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    };

    return quickSort(left).concat(arr[0], quickSort(right));
}

console.log(quickSort(arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));