/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sumA = A.reduce((a, b) => a + b, 0);
  const sumB = B.reduce((a, b) => a + b, 0);
  const num = (sumA - sumB) / 2;

  let res;

  for (let item of B) {
      const y = item + num
      if (A.includes(y)) {
          res=[y,item]
          break;
      }
  }
  console.log(res);
  return res
};

fairCandySwap([1,1],[2,2])