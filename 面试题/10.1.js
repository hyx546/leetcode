/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
    
//   let a=b=1;c=0;
//   while(n-- >0) {
//       a=b;
//       b=c;
//       c=(a+b)%1000000007;
//   }
//   return c
// };


function test(n){
  const cache = [];
  const fib = (n) => {
    if(cache[n] !=undefined){
      return cache[n]
    };
    if(n<=2){
      cache[n] = 1;
      return 1;
    }
    let temp = fib(n-1) + fib(n-2);
    cache[n] = temp;
    return temp
  }
  
  return fib(n);
}

console.log(test(5));
