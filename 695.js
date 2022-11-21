/**
 * 695. 岛屿的最大面积
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxNum = 0, curNum = 0;

    const dfs = (grid, c, r) => {
        if (c < 0 || r < 0 || c >= grid.length || r >= grid[0].length) return;
        if (grid[c][r] !== 1) return;

        grid[c][r] = 2;
        curNum++;

        dfs(grid, c - 1, r);
        dfs(grid, c + 1, r);
        dfs(grid, c, r - 1);
        dfs(grid, c, r + 1);
    };
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                dfs(grid, i, j);
                maxNum = Math.max(maxNum, curNum);
                curNum = 0;
            }
        }
    }

    return maxNum;
};

console.log(maxAreaOfIsland(grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));