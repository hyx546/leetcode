/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let arr =[]
  for(let n of nums2) {
    if(nums1.indexOf(n) > -1) {
      if(arr.indexOf(n)=== -1){
        arr.push(n)
      }
    }
  }
  console.log(arr);
};
intersection([4,9,5],[9,4,9,8,4])