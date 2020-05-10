/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  for(let i=0;i<A.length;i++) {
      if(A.indexOf(A[i]) !== A.lastIndexOf(A[i])){
          return A[i]
      }
  }
};