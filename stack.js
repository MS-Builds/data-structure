/*
A Stack is a linear data structure that follows 
LIFO (Last In, First Out)-the element added last is the first to be removed
*/

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  push(value) {
    this.stack.push(value);
    this.top++;
  }
  pop() {
    const item = this.stack.pop();
    this.top--;
    return item;
  }
  getTop() {
    if (this.top > -1) {
      return this.stack[this.top];
    }
    return undefined;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log("Popped element:", stack.pop());
console.log("Top element:", stack.getTop());
