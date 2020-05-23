/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let nums = A.filter(item => item %2 === 0)
  let arr = A.filter(item => item %2 !== 0)
  return nums = [...nums,...arr]
};