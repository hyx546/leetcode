/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr=[];
  for(let i =0;i<=numRows;i++){
    let nums =[]
      for(let j=0;j<i+1;j++){
          if(j==0 || j==i) nums.push(1);
          else nums.push(arr[i-1][j-1] + arr[i-1][j])
      }
    arr.push(nums)
  }
  console.log(arr);
};

generate(3);