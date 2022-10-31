/**
 * 48. 旋转图像
 * n2
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;

    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }

    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], [matrix[j][i]]] = [matrix[j][i], [matrix[i][j]]];
        }
    }

    return matrix;
};


console.log(rotate(matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));