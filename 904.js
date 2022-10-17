/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let max = 0;
    const len = fruits.length;
    const obj = new Map();
    let left = 0;
    for (let i = 0; i < len; i++) {
        obj.set(fruits[i], (obj.get(fruits[i]) || 0) + 1);
        while (obj.size > 2) {
            obj.set(fruits[left], obj.get(fruits[left]) - 1);
            if (obj.get(fruits[left]) === 0) {
                obj.delete(fruits[left]);
            }
            left++;
        }
        max = Math.max(max, i - left + 1);
    }
    return max;
};

console.log(totalFruit(fruits = [0, 1, 2, 2]));