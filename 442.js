/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let arr = []
  nums.map(item => {
      let n =Math.abs(item)
      if(nums[n-1] < 0 ){
          arr.push(n)
      }
      else{
          nums[n-1] *= -1
      }
  })
  return arr
};
