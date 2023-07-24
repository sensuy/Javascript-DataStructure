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

  peek() {
    return console.log(this.top);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode
      this.top = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }

  pop() {
    if (!this.top) {
      return null
    }
    if (this.top === this.bottom) {
      this.bottom = null
    }
    // const holdingPointer = this.top
    this.top = this.top.next
    this.length--
    return this
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


