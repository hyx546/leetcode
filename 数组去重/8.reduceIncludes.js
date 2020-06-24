function unique(arr) {
  return arr.reduce((pre,cur) => pre.includes(cur) ? pre : [...pre,cur],[])
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr));