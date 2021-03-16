/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let map = new Map(), stack = [], i = s.length;
  while (i--) {
    map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1)
  };
  while (++i<s.length) {
    const n = s[i];
    map.set(n, map.get(n) - 1);
    if(!stack.includes(n)){
      let j = stack.length;
      while (j-- && stack[j]>n && map.get(stack[j])) {
        stack.pop()
      };
      stack.push(n)
    }
  }
  return stack.join('')
};


console.log(removeDuplicateLetters("bcabc"));