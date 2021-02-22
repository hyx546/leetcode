var lengthOfLongestSubstring = function(s) {
  // if(s.length<=1) return s.length;
  let max=0,res='';
  for(let i=0;i<s.length;i++){
    if(!res.includes(s[i])){
      res +=s[i];
      max = Math.max(max,res.length)
    }
    else{
      res = res.slice(res.indexOf(s[i])+1);
      res +=s[i]
    }
  }
  console.log(max);
  // return max
};

lengthOfLongestSubstring("bbtablud")