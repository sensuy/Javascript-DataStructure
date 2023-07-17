// LIFO (last in first out)

// LOOKUP O(n)
// PUSH O(1)
// POP O(1)
// PEEK O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {}

  push(value) {}

  pop() {}

  //isEmpty
}
