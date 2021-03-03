/**
 * @param {number} num
 * @return {number[]}
 */

 // 时间复杂度 O(k*num) k是二进制的位数
var countBits = function (num) {

  const toOne = (x) => {
      let count = 0;
      while (x > 0) {
          x &=x-1; // x是否是2的整数次幂
          count++;
      }
      return count;
  }
  const arr = new Array(num+1).fill(0);
  for (let i = 0; i <= num; i++) {
      arr[i] = toOne(i)
  }
  return arr
};

// 动态规划
// 都是利用了x是否是2的整数次幂
// a[i] 为i-最高位 +1
var countBits = function (num) {
    const arr = new Array(num + 1).fill(0);
    let heightBit = 0;
    for (let i = 1; i <=num; i++) {
        if ((i &(i - 1)) == 0) {
            heightBit = i;
        }
        arr[i] = arr[i - heightBit] + 1
    }
    return arr
};