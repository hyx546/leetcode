/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let num =0 ;
  while(s.length>0 && s[s.length-1] === ' ') s=s.substring(0,s.length-1);
  for(let n of s) {
      if(n !== ' '){
          num++;
      }
      else{
          num =0;
      }
  }
  return num;
};