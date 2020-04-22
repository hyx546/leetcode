/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let b = Math.sqrt(c)
  for(let i=0;i<=b;i++){
      let a = Math.sqrt(c-i*i);
      if(a===parseInt(a)) return true
  }
  return false
};