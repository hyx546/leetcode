/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex<0 || rowIndex>33) return '';
  let nums=[]
  for(let i=0;i<=rowIndex;i++){
      let arr=[]
      for(let j =0; j<i+1;j++) {
          if(j==0||i==j) arr.push(1);
          else arr.push(nums[i-1][j-1]+nums[i-1][j])
      }
      nums.push(arr)
  }
  return nums[rowIndex];
};