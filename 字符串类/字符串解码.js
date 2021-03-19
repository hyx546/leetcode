/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 使用两个栈，用来存储倍数和字符串
  let numStack = [], strStack = [];
  let num = 0, result = "";
  for (let i = 0; i < s.length; i++) {
    // 如果是数字
    if (!isNaN(s[i])) {
      num = num * 10 + Number(s[i]);  // 可能是不止是1位数
    }
    // 如果是左括号
    else if (s[i] === '[') {
      strStack.push(result);
      result = "";
      numStack.push(num);
      num = 0;
    }
    // 如果是右括号
    else if (s[i] === ']') {
      const times = numStack.pop();
      result = strStack.pop() + result.repeat(times);
    }
    // 如果是字符串
    else {
      result += s[i]
    }
  }
  return result
};


console.log(decodeString("100[leetcode]"));