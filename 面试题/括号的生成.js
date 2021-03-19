/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  const test = (left, right, str) => {
    if (str.length === 2*n) {
      res.push(str);
      return;
    }
    if (left >0) {
      test(left-1,right,str+"(")
    }
    if(right > left){
      test(left,right-1,str+")")
    }
  }

  test(n, n, "")
  return res;
};

console.log(generateParenthesis(3));