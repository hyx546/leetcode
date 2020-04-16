/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length === 0) return []
intervals = intervals.sort((a,b) => a[0]-b[0])
let arr =[intervals[0]];
for (let i = 1; i < intervals.length; i++) {
    if(intervals[i][0] > arr[arr.length-1][1]){
      arr.push(intervals[i])
    }
   else{
      if(intervals[i][1] > arr[arr.length-1][1]){
        arr[arr.length-1][1]=intervals[i][1]
      }
    }
}
return arr
};