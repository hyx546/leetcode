/**
 * 1773. 统计匹配检索规则的物品数量
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    const objArr = {
        'type': 0,
        'color': 1,
        'name': 2
    };
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item[objArr[ruleKey]] === ruleValue) {
            sum++;
        }
    }

    return sum;
};

console.log(countMatches(items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], ruleKey = "color", ruleValue = "silver"));