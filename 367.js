/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  return Math.sqrt(num) === parseInt(Math.sqrt(num)) ? true:false
};