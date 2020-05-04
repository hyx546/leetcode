/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
  let a=b=1;c=0;
  while(n-- >0) {
      a=b;
      b=c;
      c=(a+b)%1000000007;
  }
  return c
};

