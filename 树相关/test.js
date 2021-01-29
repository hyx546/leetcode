const arr = [1,2,3];
arr.forEach((item,index) => {
  console.log(arr.slice(0,index));
  console.log(arr.slice(index+1));
})