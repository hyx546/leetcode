var lengthOfLongestSubstring = function(s) {
  let l =0;
  let res=0;//结果
  let mapArr = new Map();
  for(let i=0;i<s.length;i++){
      if(mapArr.has(s[i]) && mapArr.get(s[i]) >=l){
          l = mapArr.get(s[i]) + 1; // 如果有重复，那么左指针就右移一步
      }
      res = Math.max(res,i-l+1);
      mapArr.set(s[i],i);
      console.log('---mapArr',mapArr);
  }
  console.log(res);
  // return res
};

lengthOfLongestSubstring("abcabcbb")