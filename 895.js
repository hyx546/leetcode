/**
 * 895. 最大频率栈
 */
var FreqStack = function () {
    this.stack = new Map();
    this.groupStack = new Map();
    this.max = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    const count = (this.stack.get(val) || 0) + 1;
    this.stack.set(val, count);

    if (!this.groupStack.has(count)) {
        this.groupStack.set(count, []);
    }
    this.groupStack.get(count).push(val);

    this.max = Math.max(this.max, count);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    const arr = this.groupStack.get(this.max);

    const val = arr.pop();

    this.stack.set(val, this.stack.get(val) - 1);

    if (arr.length === 0) {
        this.max--;
    }

    return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */