/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let max = 0;

  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })
  console.log(envelopes);

  const arr = new Array(envelopes.length).fill(1);

  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[j][1] < envelopes[i][1] && envelopes[j][0] < envelopes[i][0]) {
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
    max = Math.max(max, arr[i])
  }

  return max
};

console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]));