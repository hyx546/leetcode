/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if(k===0) return []
  let sum=0;
  let arr=[]
  for(let m=0;m<=k;m++){
      sum = shorter*m+longer*(k-m);
      arr.push(sum)
  }
  return[...new Set(arr)].sort((a,b) => a-b)
};