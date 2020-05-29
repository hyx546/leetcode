/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  arr = arr.sort((a,b) => a-b)
  let count =0 ;
  let newArr = []
  for(let item of arr) {
      if(arr.lastIndexOf(item) - arr.indexOf(item) + 1 === item
      ) newArr.push(item)
  }
  return newArr.length === 0 ? -1 :Math.max(...newArr)
};