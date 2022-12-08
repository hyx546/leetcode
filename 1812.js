/**
 * 1812. 判断国际象棋棋盘中一个格子的颜色
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const arr = coordinates.split('');

    const row = (arr[0].charCodeAt() - 'a'.charCodeAt()) + 1;

    const column = Number(arr[1]);

    return (row + column) % 2 !== 0;


};