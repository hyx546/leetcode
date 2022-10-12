/**
 * 415. 字符串相加
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length-1,j=num2.length-1;
    let re=0,sum = '';

    while(i>=0||j>=0){
        const a = i>=0 ? Number(num1[i--]):0;
        const b = j>=0 ? Number(num2[j--]):0;
        const result = a+b+re;
        sum = result%10 + sum;
        re = Math.floor(result/10);
    }

    return re ? re+sum:sum;
};



console.log(addStrings(num1 = "456", num2 = "77"));