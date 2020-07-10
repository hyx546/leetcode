/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let Acount = 0;
  let count = 0;
  for(let i=0;i<s.length;i++){
      if(s[i] === 'A'){
          Acount++;
      }
      if(s[i] === 'L'&&s[i] === s[i+1]&& s[i] === s[i+2]){
          return false;
      }
  }
  return Acount>1? false :true
};