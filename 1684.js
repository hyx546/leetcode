/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        const str = words[i];
        let flag = true;
        for (let j = 0; j < str.length; j++) {
            if (!allowed.includes(str[j])) {
                flag = false;
                break;
            }
        }
        flag && sum++;
    }
    return sum;
};


console.log(countConsistentStrings(allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"]));