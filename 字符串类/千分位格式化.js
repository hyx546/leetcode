// -312332.12312 2  => '-312,332.12'
// 1234567890.12 5  => '1,234,567,890.12'

function formatNumber(num, fixed) {
    const isFlag = num >= 0;
    let str = '' + Math.abs(num);
    const arr = str.split('.');

    let leftStr = arr[0], rightStr = arr[1].slice(0, fixed);
    let count = 0, len = leftStr.length - 1;

    let newStr = '';
    while (len >= 0) {
        count++;
        newStr = leftStr[len] + newStr;
        if (count === 3) {
            count = 0;
            len !== 0 && (newStr = ',' + newStr);
        }
        len--;
    }

    return (isFlag ? '' : '-') + newStr + '.' + rightStr;
}

console.log(formatNumber(-312332.12312, 2));
console.log(formatNumber(1234567890.123178, 5));