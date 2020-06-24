var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i]=== arr[j]){
        arr.splice(j,1)
        j--;
      }
    }
  }
  return arr
}

console.log(unique(arr));
