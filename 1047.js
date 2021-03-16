var removeDuplicates = function (S) {
  let arr = [];
  for(let item of S){
    if(arr.length && arr[arr.length-1] === item){
      arr.pop()
    }else{
      arr.push(item)
    }
  }
  return arr.join('')
};

console.log(removeDuplicates('abbaca'));