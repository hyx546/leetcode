/**
 * 20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    const obj = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] && stack[stack.length - 1] === obj[s[i]]) {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid(s = "(([])){}"));