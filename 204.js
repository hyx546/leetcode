/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  var count = 0;
  function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};
