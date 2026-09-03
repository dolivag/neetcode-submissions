class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let targetsMap: Map<number, number> = new Map();
        let result: number[] = [];
        for (let i = 0; i < numbers.length; i++) {
            let targetDifference = target - numbers[i];
            if (targetsMap.has(targetDifference)) {
                return [targetsMap.get(targetDifference), i+1]
            } else {
                targetsMap.set(numbers[i], i+1)
            }
        }
    }
}
