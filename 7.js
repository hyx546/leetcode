/**
 * 7. 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const str = Math.abs(x) + '';
    if (str.length === 1) return x;
    const isMinus = x < 0;
    const ans = str.split('').reverse().join('');
    const number = isMinus ? parseInt('-' + ans) : parseInt(ans);
    if ((!((-Math.pow(2, 31)) <= number && number <= (Math.pow(2, 31) - 1)))) return 0;
    return number;
};

console.log('====================================');
console.log(reverse(123));
console.log('====================================');