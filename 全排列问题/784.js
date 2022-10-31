const { use } = require('express/lib/application');

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let res = [];

    const isChar = (char) => {
        const isFlag = char >= 'A' && char <= 'Z';
        const isFlag2 = char >= 'a' && char <= 'z';
        return isFlag || isFlag2;
    };

    const translateChar = (char) => {
        const isFlag = char >= 'A' && char <= 'Z';
        const isFlag2 = char >= 'a' && char <= 'z';
        if (isFlag) {
            return char.toLowerCase();
        }
        else if (isFlag2) {
            return char.toUpperCase();
        }
    };

    const dns = (start, n, cur) => {
        console.log('cur', cur);
        if (start === n) {
            res.push(cur);
            return;
        }

        dns(start + 1, n, cur + s[start]);
        if (isChar(s[start])) {
            dns(start + 1, n, cur + translateChar(s[start]));
        }
    };

    dns(0, s.length, '');
    return res;
};


console.log(letterCasePermutation(s = "3z4"));