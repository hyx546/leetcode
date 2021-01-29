/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  const test = (num) => {
      if (num === 0) return;
      count++;
      num / 2 === parseInt(num / 2) ? test(num/2):test(num-1);
  }
  test(num)
  return count
};


var numberOfSteps = function (num) {
  let str = num.toString(2);
  return str.length + str.replace(/0/g,"").length-1;
};