/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let a = A.filter((item) => item % 2 !== 0)
  let b = A.filter((item) => item % 2 === 0)
  let arr =[]
  let count =0 ;
  for(let i=0;i< A.length;i++) {
      if(count === 0 ){
          arr.push(b.shift())
          count =1;
      }
      else{
          arr.push(a.shift())
          count =0;
      }
  }
  return arr
};