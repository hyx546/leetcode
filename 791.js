/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const arr = new Array(26).fill(0);

    for (let i = 0; i < order.length; i++) {
        arr[order[i].charCodeAt() - 'a'.charCodeAt()] = i + 1;
    }

    const arrS = s.split('');

    arrS.sort((a1, a2) => arr[a1.charCodeAt - 'a'.charCodeAt] - arr[a2.charCodeAt() - 'a'.charCodeAt()]);

    return arrS.join('');
};/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const arr = new Array(26).fill(0);

    for (let i = 0; i < order.length; i++) {
        arr[order[i].charCodeAt() - 'a'.charCodeAt()] = i + 1;
    }

    const arrS = s.split('');

    console.log(arrS, arr);

    arrS.sort((a1, a2) => arr[a1.charCodeAt() - 'a'.charCodeAt()] - arr[a2.charCodeAt() - 'a'.charCodeAt()]);

    console.log(arrS);

    return arrS.join('');
};

console.log(customSortString(order = "cba", s = "abcd"));