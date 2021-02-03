/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const res = [];
  for(let i=0;i<nums.length-k+1;i++){
      const arr = nums.slice(i,i+k).sort((a,b) => a-b);
      if(arr.length % 2 === 0){
        res.push((arr[k/2] + arr[k/2 -1])/2)
      }else{
        res.push(arr[parseInt(k/2)])
      }
  }
  console.log(res);
};

medianSlidingWindow([1,3,-1,-3,5,3,6,7],3)