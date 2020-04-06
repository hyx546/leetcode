/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(1 > a.length &&1 > b.length && b.length > 10^4 && a.length >10^4) return '';
  let c='';
  let count =0 ;
  for(let i=a.length-1,j=b.length-1;i>=0 || j>=0;i--,j--) {
      let sum = count;
      sum+= i>= 0 ? parseInt(a[i]) : 0;
      sum+= j>= 0 ? parseInt(b[j]) : 0;
      c += sum%2;
      count = Math.floor(sum/2);
  }
  c += count === 1? count : "";
  console.log(c.split('').reverse().join(''));
  
};
addBinary("11","1")