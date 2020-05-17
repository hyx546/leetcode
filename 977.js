/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(n => n*n).sort((a,b) => a-b)
};