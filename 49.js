/**
 * 49. 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const arr = Array.from(strs[i]);
        arr.sort();
        const key = arr.toString();
        const list = map.has(key) ? [...map.get(key), strs[i]] : [strs[i]];
        map.set(key, list);
    }

    return Array.from(map.values());
};


console.log(groupAnagrams(strs = ["eat", "tea", "tan", "ate", "nat", "bat"]));