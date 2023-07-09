// 10 -> 5 -> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null,
//             },
//         },
//     },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  traverseToIndex(index) {
    let counter = 0;

    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);

    console.log(JSON.stringify(leader));
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return console.log("The index doesn't exist");
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    leader.next = unwantedNode.next;
    this.length--;

    return this;
  }

  reverse() {
    let first = this.head
    this.tail = first
    let second = this.head.next

    while (second) {
        const temp = second.next;
        second.next = first
        first = second
        second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
}

}


const mylinkedList = new LinkedList(0);
mylinkedList.append(1)
mylinkedList.append(2)
mylinkedList.append(3)
mylinkedList.append(4)
mylinkedList.reverse()
// mylinkedList.remove(4)
// console.log(JSON.stringify(mylinkedList))


