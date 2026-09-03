class MinStack {
    private values: number[]
    constructor() {
        this.values = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.values.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.values.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.values[this.values.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.values);
    }
}
