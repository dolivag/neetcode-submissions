class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let preffix: number[] = [];
        let suffix: number[] = [];
        let volume: number = 0;

        for (let left = 0; left < height.length; left ++) {
            preffix.push(Math.max(preffix[preffix.length-1] || 0, height[left]));
        }

        for (let right = height.length - 1; right >= 0; right--) {
            suffix[right] = Math.max(suffix[right + 1] || 0, height[right]);
        }

        for (let i = 0; i < height.length; i++) {
            volume += Math.min(preffix[i], suffix[i]) - height[i];
        }
        
        return volume;
    }
}
