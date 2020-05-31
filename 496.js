/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const { length } = nums1;
  let result = [];
  for(let i = 0; i < length; i++){
      let index = nums2.indexOf(nums1[i]);
      let findexI = nums2.findIndex((item,idx) => item > nums1[i] && index < idx);
      findexI > -1 ? result.push(nums2[findexI]) : result.push(findexI)
  }
  return result;
};
