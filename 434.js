/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(" ").filter(item => item !== "").length
};

console.log(countSegments("     "));