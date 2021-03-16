/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const obj = {}
  for (let item of words) {
    obj[item] = !obj[item] ? 1 : obj[item] + 1;
  }
  return Object.keys(obj).sort((a,b) => obj[b]-obj[a]||a.localeCompare(b)).slice(0,k)
   
};

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));