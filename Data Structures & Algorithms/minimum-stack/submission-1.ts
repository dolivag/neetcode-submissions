class MinStack {
    private values: number[] = [];
    private mins: number[] = []; 

    push(val: number): void {
        this.values.push(val);
        this.mins.push(Math.min(val, this.mins[this.mins.length - 1] ?? val));
    }

    pop(): void {
        this.values.pop();
        this.mins.pop();
    }

    top(): number {
        return this.values[this.values.length - 1];
    }

    getMin(): number {
        return this.mins[this.mins.length - 1]; 
    }
}