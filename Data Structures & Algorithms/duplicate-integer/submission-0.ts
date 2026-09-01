class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let uniqueElements: number[] = [... new Set(nums)];
        return uniqueElements.length === nums.length ? false : true;
    }
}
