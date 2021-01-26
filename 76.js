/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// l是否全部包含t
var test = (l, t) => {
  console.log(l);
  const arr = l.split("").sort().join('');
  const tarr = t.split("").sort().join('');
  console.log('---arr',arr);
  console.log('----tarr',tarr);
  console.log('---arr.includes(tarr)',arr.includes(tarr));
  return arr.includes(tarr)
}

var minWindow = function (s, t) {
  let left = 0;
  let minLen = ""
  let minSize = t.length - 1;
  let right = minSize;

  let size = s.length;
  while (left < s.length) {
    right = left + minSize
    while (right <= s.length) {
      right++;
      const min = s.slice(left, right)
      if (test(min, t)) {
        minLen = min.length <= size ? min : minLen
        size = Math.min(size, min.length)
      }
    }
    left++
  }
  console.log('---minLen', minLen);
  return minLen
};

minWindow("abc", 'ac')