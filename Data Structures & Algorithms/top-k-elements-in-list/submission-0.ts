class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let frequencyRecord : Record<number, number> = {};
        nums.map((n)=> {
            frequencyRecord[n] = (frequencyRecord[n] || 0 ) +1;
        })
        return this.getTopKeys(frequencyRecord, k);
    }

getTopKeys(
  record: Record<string, number>,
  x: number
): number[] {
  return Object.entries(record)
    .sort(([, a], [, b]) => b - a)
    .slice(0, x)
    .map(([key]) => Number(key));
}
}
