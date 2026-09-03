class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxWater: number = 0;

        let i: number = 0;
        let j: number = heights.length -1;

        while (i < j) {
            let heightI: number = heights[i];
            let heightJ: number = heights[j];
            let maxHeight: number = Math.min(heightI, heightJ);
            let baseLength = j - i;
            let volume = maxHeight * baseLength;
            maxWater = volume > maxWater ? volume : maxWater;
            heightJ > heightI ? i++ : j--
        }
        return maxWater;
    }
}
