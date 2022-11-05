/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    let str = word;
    let ans = 0;
    while (sequence.includes(str)) {
        ans++;
        str += word;
    }
    return ans;
};

console.log(maxRepeating(sequence = "ababc", word = "ba"));