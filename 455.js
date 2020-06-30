/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gIndex =0,sIndex=0,res=0;
  g = g.sort((a,b) => a-b)
  s = s.sort((a,b) => a-b)

  while(gIndex<g.length && sIndex<s.length){
      if(g[gIndex]<=s[sIndex]){
          res++;
          gIndex++;
      }
      sIndex++
  }
  return res
};