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
    this.array = [];
  }

  peek() {
    return console.log(this.array[this.array.length - 1]);
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
  }
}

const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')

console.log(JSON.stringify(myStack));

//Discord
//Udemy
//google


