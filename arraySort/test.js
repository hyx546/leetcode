const arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];


function merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }

    return arr.concat(left, right);
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const midIndex = Math.floor(arr.length / 2);

    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex);

    return merge(mergeSort(left), mergeSort(right));

}


console.log(mergeSort(arr1));