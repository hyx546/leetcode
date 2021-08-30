const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCB";
const exist = (board: string[][], word: string):boolean => {
  const m = board.length;
  const n = board[0].length;
  const len = word.length;
  if (m * n < len) return false;
  const dfs = (i: number, j: number, k: number):boolean => {
    if (k === len) return true;
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (board[i][j] === word[k]) {
      const current = board[i][j];
      board[i][j] = ".";
      if (
        dfs(i - 1, j, k + 1) ||
        dfs(i + 1, j, k + 1) ||
        dfs(i, j - 1, k + 1) ||
        dfs(i, j + 1, k + 1)
      )
        return true;
      else {
        board[i][j] = current;
      }
    }
    if (k > 0) return false;
    else {
      if (++j === n) {
        if (++i === m) return false;
        j = 0;
      }
    }
    return dfs(i, j, k);
  };
  return dfs(0, 0, 0);
};

console.log(exist(board, word));
