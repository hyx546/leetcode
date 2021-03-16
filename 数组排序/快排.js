// 快速排序，找到一个中间基元，把数组分成两份
// 从起点往后寻找比基数大的，记录为下标 i；
// 再从终点往前寻找比基数小的，记录为下标 j，
// 当 i <= j时，原地交换数值；
// 重复，直到遍历所有元素，并记录遍历的最后一个下标 i，以此下标为分界线，分为左右两边，

const devide = (arr,start,end) => {
  const base = arr[start+Math.floor((end-start)/2)];
  let l = start,r=end;
  while (l<=r) {
    while (arr[l] <base) {
      l++;
    }
    while (arr[r] >base) {
      r--;
    }
    if(l<=r){
      [arr[l],arr[r]]=[arr[r],arr[l]];
      l++;
      r--;
    }
  }
  return l
}

const sortFun = (arr,start,end) => {
  if(!arr.length) return arr;
  const index = devide(arr,start,end)
  if(start<index-1){
    sortFun(arr,start,index-1)
  }
  if(end > index){
    sortFun(arr,index,end)
  }
  return arr
}

function quickSort(arr){
  return sortFun(arr,0,arr.length-1)
}

console.log(quickSort([12,4,1,5,3,9,6,8,7,11]));