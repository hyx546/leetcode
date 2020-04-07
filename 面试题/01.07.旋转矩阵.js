/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for(let i =0;i<matrix.length;i++){
      for(let j =i;j<matrix[i].length;j++){
          [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
      }
  }
  matrix.forEach(row => row.reverse())
  console.log(matrix);
  
};

rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
],)