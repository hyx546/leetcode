const paramFun = (url) => {
  // 通过split解析
  let arr = url.split('?')[1].split('&');
  let obj = {}
  arr.forEach(item => {
     if(/=/.test(item)){
       const [key,val] = item.split('=');
       let vals = decodeURIComponent(val);
       if(obj[key]){
         obj[key] = obj[key].concat(vals);
       }else{
         obj[key] = vals
       }
     }else{
       obj[item]=true
     }
  })
  return obj
}

console.log(paramFun('http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'));