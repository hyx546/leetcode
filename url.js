function getUrlParam(sUrl, sKey) {
    const arr = sUrl.split('?')[1].split('#')[0].split('&');
    const res= [];
    for(let item of arr) {
      const val = item.split('=');
      if(val[0] === sKey){
        res.push(parseInt(val[1]));
      }
    }
    return res
}

getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key')