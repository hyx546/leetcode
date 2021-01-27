var test = (a,b) => {
  if((a[0] === b[0] && a[1] === b[1])||
      a[0] === b[1] && a[1] === b[0]){
          return 1;
      }
  return 0;
}
var numEquivDominoPairs = function(dominoes) {
  let count = 0;
  for(let i=0;i<dominoes.length;i++){
    for(let j=i+1;j<dominoes.length;j++){
      count += test(dominoes[i],dominoes[j])
    }
  }
  return count
};

numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])


//  因为规定是1-9，所有可以把二元数组转化为两位数来比较
var numEquivDominoPairs = function(dominoes) {
  const arr = new Array(100).fill(0)
  let ret =0;
  for(let item of dominoes){
      const val = item[0]<item[1]?item[0]*10+item[1]:item[1]*10+item[0];
      ret += arr[val];
      arr[val]++;
  }
  return ret
};