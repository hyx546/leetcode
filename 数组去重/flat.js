// 数组扁平化去重
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

const arr1 = arr.flat(Infinity);


console.log('----arr1',arr1);
console.log('-----',Array.from(new Set(arr1)).sort((a,b) => a-b));
