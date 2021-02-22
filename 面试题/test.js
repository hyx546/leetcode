function merge( A, B ) {
  // write code here
  A = A.concat(B)
  console.log(A.sort((a,b) => a-b));
  return A.concat(B).sort((a,b) => a-b)
}
merge([],[1])