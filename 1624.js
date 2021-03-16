/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let max = -1;
  let l=0;
  const obj = new Map()
  for(let i =0 ;i<s.length;i++){
      if(obj.has(s[i]) && obj.get(s[i])>=l){
          max = Math.max(max,i-l+1-2)
          l = obj.get(s[i])+1;
      }else{
          obj.set(s[i],i);
      }
  }
  return max
};

console.log(maxLengthBetweenEqualCharacters("cabbac"));