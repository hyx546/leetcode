function unique(arr) {
  var array =[];
  for(var i = 0; i < arr.length; i++) {
          if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                  array.push(arr[i]);
            }
  }
  return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
  console.log(unique(arr))