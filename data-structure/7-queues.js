// FIFO (First In First Out)

// LOOKUP O(n)
// ENQUEUE O(1) (PUSH)
// DEQUEUE O(1) (POP)
// PEEK O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List implementation
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Return the first element
  peek() {
    return this.first;
  }

  // Add to the end
  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;

    this.size++;
    return this;
  }

  // Remove from the beginning
  dequeue() {
    if (this.size === 0) return null;

    const temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
