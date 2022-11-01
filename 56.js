/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//   if(intervals.length === 0) return []
// intervals = intervals.sort((a,b) => a[0]-b[0])
// let arr =[intervals[0]];
// for (let i = 1; i < intervals.length; i++) {
//     if(intervals[i][0] > arr[arr.length-1][1]){
//       arr.push(intervals[i])
//     }
//    else{
//       if(intervals[i][1] > arr[arr.length-1][1]){
//         arr[arr.length-1][1]=intervals[i][1]
//       }
//     }
// }
// return arr
// };

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const arr = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const item = arr[arr.length - 1];
    if (intervals[i][0] > item[1]) {
      arr.push(intervals[i]);
    } else {
      arr[arr.length - 1][1] = Math.max(intervals[i][1], item[1]);
    }
  }
  return arr;
};

console.log('====================================');
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log('====================================');