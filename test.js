var mergeAlternately = function(word1, word2) {
  const arr1 = word1.split('');
  const arr2 = word2.split('');
  let s ="";
  while(arr1.length && arr2.length){
      s+=arr1.shift();
      s+=arr2.shift();
  }
  console.log(arr2);
  if(arr1.length) s+=arr1.join('');
  if(arr2.length) s+=arr2.join('')
  console.log(s);
  // return s
};

mergeAlternately("ab","pqrs")