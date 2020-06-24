function unique(arr) {
  return arr.filter(function(item,index,arr){
    return arr.indexOf(item) === index;
  })
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr));