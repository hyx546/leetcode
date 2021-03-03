/**
 * 先递归的分解数列，再合并数列（分治思想的典型应用）
 * 1.把数组拆分成AB两个子数组，再继续拆分，直至每个每个小组都只有一个元素为止
 * 2.按照拆分的过程合并数组，因为每个小组只有一个元素，所以可以看作是有序数组合并
 * 时间复杂度:O(nlogn)
 */

// 拆分O(logn)
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merger(mergeSort(left), mergeSort(right))
}

// O(n)
function merger(a, b) {
  const m = a.length;
  const n = b.length
  let i = j = 0;
  const c = [];
  while (i < m && j < n) {
    if (a[i] < b[j]) {
      c.push(a[i++])
    } else {
      c.push(b[j++])
    }
  }

  while (i < m) {
    c.push(a[i++])
  }
  while (j < n) {
    c.push(b[j++])
  }
  return c
}

console.log(mergeSort([4, 6, 2, 1, 7, 8, 9, 5, 3]));