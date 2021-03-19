// 不能使用concat，includes等方法

function test(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b[0] === a[i]) {
      let j = 1
      for (j; j < b.length; j++) {
        if (a[i + j] === b[j]) {
          if (j === b.length - 1) {
            return true
          }
        } else {
          break;
        }
      }
    }
  }
  return false;
}

console.log(test('abxfafa', 'xfa'));