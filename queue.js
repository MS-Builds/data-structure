/*
A Queue is a linear data structure that follows the FIFO (First In, First Out) principle.
 Elements are inserted at the rear and removed from the front.
*/

class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const item = this.queue[this.front];
    delete this.queue[this.front++];
    return item;
  }
  getFront() {
    return this.queue[this.front];
  }
  getRear() {
    return this.queue[this.rear - 1];
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("Deqeued element:", queue.dequeue());
console.log(queue.getFront());
console.log(queue.getRear());
