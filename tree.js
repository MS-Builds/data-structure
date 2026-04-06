/*
Tree
A Tree is a hierarchical data structure with nodes connected by edges. The top node is the root.
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this.root;
    }

    const queue = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      let curr = queue.shift();
      if (curr.left !== null) {
        queue.push(curr.left);
      } else {
        curr.left = new Node(value);
        return;
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      } else {
        curr.right = new Node(value);
        return;
      }
    }
  }
}

function traverse(root) {
  if (root === null) {
    return;
  }
  traverse(root.left);
  process.stdout.write(root.data + " ");
  traverse(root.right);
}

const tree = new Tree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
traverse(tree.root); // 40 20 50 10 30 (In-order traversal)
