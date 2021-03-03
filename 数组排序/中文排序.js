function cnSort(arr) {
  arr.sort((a,b) => {
    a.localeCompare(b)
  })
  return arr
}

console.log(cnSort(['周浩','李媛','王五','安妮']));



