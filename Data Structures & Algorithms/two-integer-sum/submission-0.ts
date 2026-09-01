class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let targetsArr : Record<number, number> = {};

        let index: number = 0;
        
        for (index; index < nums.length; index ++) {
            let singleTarget = target - nums[index];
            if (singleTarget in targetsArr) {
                return [targetsArr[singleTarget], index];
            } else {
                targetsArr[nums[index]] = index; 
            }
        }
    }
}
