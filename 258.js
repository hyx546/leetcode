/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let arr =(""+num).split('')
  let sum = arr.reduce((n1,n2) => parseInt(n1)+parseInt(n2)) 
  
  return sum >9 ? addDigits(sum) : sum
};
