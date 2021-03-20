/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i]
    if (!isNaN(cur)) {
      stack.push(Number(cur));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (cur === '+') {
        stack.push(num1 + num2)
      } else if (cur === '-') {
        stack.push(num1 - num2)
      } else if (cur === '*') {
        stack.push(num1 * num2)
      } else if (cur === '/') {
        stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
      }
    }
  }
  return stack.pop()
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));