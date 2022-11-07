/**
 * 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //   let max =0;
    //   for(let i =0;i<prices.length;i++){
    //       for(let j =i+1;j<prices.length;j++) {
    //           if(prices[i]<prices[j]){
    //               max =(prices[j]-prices[i])>max? prices[j]-prices[i]:max;
    //           }
    //       }
    //   }
    //   return max
    let min = Infinity, max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - min > 0) {
            max = Math.max(prices[i] - min, max);
        }
        min = Math.min(min, prices[i]);
    }
    return max;
};