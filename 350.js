/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let arr=[]
  for(let i=0;i<nums1.length;i++){
      if(nums2.indexOf(nums1[i]) !== -1){
          nums2.splice(nums2.indexOf(nums1[i]),1)
          arr.push(nums1[i])
      }
  }
  return arr
};