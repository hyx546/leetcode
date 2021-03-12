function test(a, b) {
  const temp = new Array();
  let max =0,end=0; 
  for (let i = 0; i < a.length; i++) {
      temp[i] = new Array();
      for (let j = 0; j < b.length; j++) {
          if (a[i] === b[j]) {
              if (j > 0 && i > 0 && temp[i-1][j-1]){
                  temp[i][j] = temp[i-1][j-1] +1;
              }
              else{
                  temp[i][j] = 1
              }
         } else {
              temp[i][j] = 0;
          }
          if(temp[i][j] > max){
              max = temp[i][j];
              end = i
          }
      }
  }
  return a.substr(end-max+1,max)
}

console.log(test('abadadadada', 'fafsfdada'));