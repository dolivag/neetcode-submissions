class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxPrice: number = 0;
        let left: number = 0;
        let right: number = 1;
        
        while (right < prices.length ) {
            if (prices[right] > prices[left]) {
                maxPrice = Math.max(maxPrice, prices[right]- prices[left]);
            } else {
                left = right
            }
            right++;
        }
        return maxPrice;
    }
}
