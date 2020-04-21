/**
 * @param {number} n
 * @return {boolean}
 */
var test = function(n) {
  n+='';
  return n.split('').reduce((n,i) => n+i*i,0)
}
var isHappy = function(n) {
  if(n === 1) return true
  const list = new Set();
  while(!list.has(n)){
    list.add(n)
    if(test(n) === 1) return true
    n=test(n)
  }
  return false
};
isHappy(19)


