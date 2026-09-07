class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxPrice: number = 0;
        let left: number = 0;
        let right: number = 1;
        
        while (right <= prices.length && left !== right) {
            console.log("Calculating for left index: ", left, " and right index: ", right)
            if (prices[right] > prices[left]) {
                console.log("Found positive gain: ",prices[right]- prices[left], " in indexes: ", left, right )
                maxPrice = Math.max(maxPrice, prices[right]- prices[left]);
            } else {
                left = right
            }
            right++;
        }
        return maxPrice;
    }
}
