// res
// var lengthOfLongestSubstring = function(s) {
//   // if(s.length<=1) return s.length;
//   let max=0,res='';
//   for(let i=0;i<s.length;i++){
//     if(!res.includes(s[i])){
//       res +=s[i];
//       max = Math.max(max,res.length)
//     }
//     else{
//       res = res.slice(res.indexOf(s[i])+1);
//       res +=s[i]
//     }
//   }
//   console.log(max);
//   // return max
// };

// map
var lengthOfLongestSubstring = function(s) {
  let i=-1;
  const map = new Map();
  let res = 0;
  for (let j = 0; j < s.length; j++) {
    if(map.has(s[j])){
      i = Math.max(i,map.get(s[j]))
    }
    res = Math.max(res,j-i);
    map.set(s[j],j);
  }
  console.log(res);
};

lengthOfLongestSubstring("bbtablud")