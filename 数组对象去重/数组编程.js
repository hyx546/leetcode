/**
 * 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
 * 将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]
 */
const arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];

const newArr = [... new Set(arr)].sort((a, b) => a - b);
const map = {}

newArr.forEach(value => {
  const index = parseInt(value / 10)
  if (!map[index]) {
    map[index] = []
  }
  map[index].push(value)
})

console.log(Object.values(map))