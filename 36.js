/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const row = {},column = {},borderIndex = {};

  for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
          const num = board[i][j];
          if( num !== '.'){
              let index = parseInt(i/3)*3+parseInt(j/3);
              if(row[i+'-'+num] || column[j+'-'+num]||borderIndex[index+'-'+num]){
                  return false
              }
              else{
                  row[i+'-'+num] = true;
                  column[j+'-'+num]=true;
                  borderIndex[index+'-'+num]=true;
              }
          }
      }
  }
  return true
};