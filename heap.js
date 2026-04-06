/*
Heap
A Heap is a special Tree-based Data Structure that has the following properties.

It is a complete Complete Binary Tree.
It either follows max heap or min heap property.
*/

class Heap {
  constructor(maxSize) {
    this.arr = Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.heapSize = 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  lChild(i) {
    return 2 * i + 1;
  }

  rChild(i) {
    return 2 * i + 2;
  }

  heapify(i) {
    const l = this.lChild(i);
    const r = this.rChild(i);
    let largest = i;
    if (l < this.heapSize && this.arr[l] > this.arr[i]) {
      largest = l;
    }
    if (
      r < this.heapSize &&
      this.arr[r] > this.arr[largest] // Right gets replace only if it is bigger than left
    ) {
      largest = r;
    }

    if (largest != i) {
      const temp = this.arr[i];
      this.arr[i] = this.arr[largest];
      this.arr[largest] = temp;
      this.heapify(largest); // Recursive call for child node
    }
  }

  increaseKey(i, new_value) {
    this.arr[i] = new_value;
    // Swap the child if child > parent
    while (i !== 0 && this.arr[i] > this.arr[this.parent(i)]) {
      const temp = this.arr[i];
      this.arr[i] = this.arr[this.parent(i)];
      this.arr[this.parent(i)] = temp;
      i = this.parent(i);
    }
  }

  removeMax() {
    if (this.heapSize <= 0) {
      return null;
    }
    if (this.heapSize === 1) {
      const root = this.arr[0];
      this.heapSize -= 1;
      return root;
    }

    const root = this.arr[0];
    this.arr[0] = this.arr[this.heapSize - 1];
    this.heapSize -= 1;
    this.heapify(0); // Rearranging the heap
    return root;
  }

  deleteKey(i) {
    if (i > this.heapSize) {
      console.log("\n Not exist");
      return;
    }
    this.increaseKey(i, Infinity); // Max the root value to Infinity and removing it
    this.removeMax();
  }

  insertKey(value) {
    if (this.heapSize === this.maxSize) {
      console.log("\n Overflow heap");
      return;
    }

    // Replace the root with last leaf node
    let i = this.heapSize;
    this.arr[this.heapSize] = value;
    this.heapSize += 1;

    // check does it follow the heap rules and correcting it
    while (i !== 0 && this.arr[i] > this.arr[this.parent(i)]) {
      const temp = this.arr[i];
      this.arr[i] = this.arr[this.parent(i)];
      this.arr[this.parent(i)] = temp;
      i = this.parent(i);
    }
  }

  getMax() {
    return this.arr[0];
  }
}

const h = new Heap(6);
h.insertKey(8);
h.insertKey(7);
h.insertKey(6);
h.insertKey(5);
h.insertKey(4);
h.insertKey(3);
h.deleteKey(3); // delete node at index 3
