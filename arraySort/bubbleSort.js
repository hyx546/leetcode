/**
 * O(n2)
 * 添加一个flag，最好情况下不需要排序，只需要遍历一次O(n2)
 * @param {*} arr 
 * @returns 
 */
function bubbleSort(arr) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = false;
            }
        }
        if (flag) {
            console.log(2);
            return arr;
        }
    }
    return arr;
}

console.log(bubbleSort(arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));