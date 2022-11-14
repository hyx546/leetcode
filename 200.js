/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const dfs = (grid, c, r) => {
        if (c < 0 || r < 0 || c >= grid.length || r >= grid[0].length) return;
        if (grid[c][r] !== '1') return;

        grid[c][r] = '2';

        dfs(grid, c - 1, r);
        dfs(grid, c + 1, r);
        dfs(grid, c, r - 1);
        dfs(grid, c, r + 1);
    };

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                console.log(grid);
                count++;
            }
        }
    }
    return count;
};


console.log(numIslands(grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]));