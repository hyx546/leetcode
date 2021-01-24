// 283. 移动零

const arr =[0,1,0,3,12];

// arr.sort((a,b) => {
//   console.log(b,a);
//   console.log('-------');
//   return b?0:-1
// })

var moveZeroes = function(nums) {
  let index =0;
  let count =0;
  while(count<nums.length){
      if(nums[index] === 0){
          nums.splice(index,1);
          nums.push(0);
      }
      else index++;
      count++;
  }
  return nums
};


var moveZeroes = function (nums) {
  let i = 0, j = 0;
  while(i<nums.length){
      if(nums[i]!=0){
          [nums[i],nums[j]] = [nums[j],nums[i]];
          i++;
          j++
      }
      else i++;
  }
  return nums
};
