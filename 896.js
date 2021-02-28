// 两次遍历
var isMonotonic = function (A) {
  const test = (arr) => {
    let flag=true
    arr.forEach(((item, i, arr) => {
      if (arr[i] > arr[i + 1]) flag = false
    }));
    return flag
  }
  return test(A) || test(A.reverse())
};


// 一次遍历
var isMonotonic = function (A) {
  let a = true, b = true;
  for(let i=0;i<A.length;i++){
      if(A[i] > A[i+1]) a = false;
      if(A[i] < A[i+1]) b=false;
  }
  return a||b
};

console.log(isMonotonic([3,2,1]));