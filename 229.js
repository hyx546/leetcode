/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  nums = nums.sort((a,b) => a-b)
  let arr =[];
  let length = nums.length;
  let count =0;
  for(let i =0;i<length;i++) {
      if(nums[i] === nums[i+1]){
          count++;
      }
      else{
          count =0;
      }
      if(count >= Math.floor(length/3)){
        arr.indexOf(nums[i]) === -1?arr.push(nums[i]) : ''
      }    
  }
  console.log(arr);
};
majorityElement([2,2])