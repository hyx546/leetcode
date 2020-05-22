/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let arr =[]
  nums.map(item => {
      if(nums.indexOf(item) === nums.lastIndexOf(item)){
          arr.push(item)
      }
  }) 
  return arr
};