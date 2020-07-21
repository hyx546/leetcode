/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let key=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  let value=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let res = ''
  for(let i=0;i<key.length;i++){
      while(num>=key[i]){
          num-=key[i];
          res+=value[i]
      }
  }
  return res
};