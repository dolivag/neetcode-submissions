class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix: Array<number | string> = ['.', nums[0]]
        let suffix: Array<number | string> = [nums[nums.length - 1], '.']
        let currentPrefixValue = nums[0];
        let currentSuffixValue = nums[nums.length -1];
        
        for (let i=1; i < nums.length-1; i++) {
            currentPrefixValue *= nums[i]
            currentSuffixValue *= nums[nums.length-1 - i];
            prefix.push(currentPrefixValue);
            suffix.unshift(currentSuffixValue);
        }

        let result = [];
        for (let i = 0; i < prefix.length; i++) {
            let prefixValue = (prefix[i] !== '.' ? prefix[i] : 1) as number;
            let suffixValue = (suffix[i] !== '.' ? suffix[i] : 1) as number;
            result.push(prefixValue * suffixValue)
        }

        return result
    }
}
