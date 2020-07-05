function  parse_url(url,key) {
  var parrat = /(\w+)=(\w+)/ig;
  var parames ={};
  url.replace(parrat,(a,b,c) => {
    if(parames[b]){
      parames[b] += ','+c
    }
    else{
      parames[b] = c
    }
  })
  console.log(typeof parames[key] === 'object' ? parames[key].replace(',','').split(''):parames[key]);
}

var url = 'http://www.xxx.com?a=1&b=2&c=3';
parse_url(url,"b");
