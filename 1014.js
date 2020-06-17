/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let max =0;
  let pre=0;
  for(let i=1;i<A.length;i++) {
      pre = Math.max(pre, A[i-1] + i - 1);
      max = Math.max(max,pre+A[i]-i)
  }
  return max
};