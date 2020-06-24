var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];


function unique(arr) {
  return [...new Set(arr)]
}

console.log(unique(arr));
