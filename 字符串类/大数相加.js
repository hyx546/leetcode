/**
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