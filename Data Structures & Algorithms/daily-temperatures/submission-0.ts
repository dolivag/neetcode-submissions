class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack: number[] = [];
        let result: number[] = new Array(temperatures.length).fill(0);
        
        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
                stack.pop();
            }
            
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1] - i;
            }
            
            stack.push(i);
        }
        
        return result;
    }
}
