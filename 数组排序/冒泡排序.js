// 冒泡排序- 把数组呈递增排序
// 比较相邻两个元素，第一个比第二个大，就交换
// 每次循环一次，就可以少比较一个数
// 最差O(n2) 
// 最优O(n) 如果是本身就是排序好的数组，再遍历完一次后，就直接返回数组
function bubbleSort(arr){
  let flag = true;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        flag=false;
      }
    }
    if(flag) {
      console.log(1);
      return arr
    }
  }
  return arr
}

console.log(bubbleSort([1,2,3,4,5,9,7,8]));