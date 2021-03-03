/**
 * 选择排序和冒泡排序相似
 * 选择排序是每次都和第一个数进行比较，如果小，就交换位置
 * 每一轮下来，最小的数就放在前面
 */

function selectSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

console.log(selectSort([3,1,45,6,8,2]));