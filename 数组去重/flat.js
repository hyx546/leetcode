// 数组扁平化去重

// 1.利用flat扁平化
// 2.利用toString 扁平化
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// const arr1 = arr.flat(Infinity);


// console.log('----arr1',arr1);
// console.log('-----',Array.from(new Set(arr1)).sort((a,b) => a-b));
const arr2 = arr.toString().split(',').sort((a,b) => a-b);
console.log(Array.from(new Set(arr2)));
