/*
Linked List
A Linked List is a linear data structure where each element (node) contains data and a reference to the next node.
*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }
  delete(key) {
    if (this.head === null) {
      return null;
    }
    if (this.head.data === key) {
      const item = this.head.data;
      this.head = this.head.next;
      return item;
    }
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.next.data === key) {
        const item = temp.next.data;
        temp.next = temp.next.next;
        return item;
      }
      temp = temp.next;
    }
    return null;
  }
  getList() {
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.data + "  ");
      temp = temp.next;
    }
  }
}

const linked = new LinkedList();
linked.insert(10);
linked.insert(20);
linked.insert(30);
linked.insert(40);
linked.getList();
console.log("\n Deleted element:",linked.delete(30));
linked.getList();
