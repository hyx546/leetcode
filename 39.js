const combinationSum = (candidates, target) => {
  const res = [];
  const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
    if (sum >= target) {
      if (sum == target) {
        res.push(temp.slice()); // temp的拷贝 加入解集
      }
      return;   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
      temp.push(candidates[i]);          // 选这个数
      dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
      console.log('-----befo', temp);
      temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
      console.log('----temp', temp);
    }
  };
  dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
  return res;
};


const test = (candidates, target) => {
  const res = [], path = [];
  const combination = (start, n, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(path.slice());
      }
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(candidates[i]);
      combination(i, n, sum + candidates[i]);
      path.pop();
    }
  };
  combination(0, candidates.length, 0);

  return res;
};


// combinationSum([2, 3, 6, 7], 7);
console.log(test([2, 3, 6, 7], 7));