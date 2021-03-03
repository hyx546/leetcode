// 从字符串找靓号（4个连续相同数字，或四个连续递增加1的数字 ），符合以下两个条件之一的号码可认为是靓号

// 1. 至少连续4个相同的数字

// 2. 至少连续4个递增为1的数字


function isNiceNumber(str) {
  let start = 0;
  let end = 4;
  while (end <= str.length && end - start === 4) {
    let count = 0;
    let count1 = 0;
    let s = str.slice(start, end);
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        count++;
      }
      if (s[i + 1] - s[i] === 1) {
        count1++
      }
    }
    if (count === 3 || count1 === 3) {
      return true
    }
    start++;
    end++;
  }
  return false
}

console.log(isNiceNumber('111234'));