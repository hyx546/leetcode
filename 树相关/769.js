/**
 * 769. 最多能完成排序的块
 * 输入: arr = [4,3,2,1,0]
 * 输出: 1
 * 由于arr中存放的是[0, n - 1]的数字，所以当前块的max值一定是和index对应的。
 * 每次遍历到一个max == index时，我们就可以记录一个新的块。
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let max = 0, res = 0;
    arr.forEach((item, index) => {
        max = Math.max(max, item);
        if (max === index) res++;
    });
    return res;
};