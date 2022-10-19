class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(root) {
    this.root = root;
  }

  append(newLastNode) {
    let lastNode = this.root;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = new Node(newLastNode, null);
  }

  addToStart(newFirstNode) {
    const currentLL = { ...this.root };
    this.root.data = newFirstNode;
    this.root.next = new Node(currentLL.data, currentLL.next);
  }

  pop() {
    let lastNode = this.root;
    let prev = lastNode;
    let i = 0;
    while (lastNode.next !== null) {
      prev = lastNode;
      lastNode = lastNode.next;
      i++;
    }
    prev.next = null;
  }

  addToPosition(position, newNode) {
    let lastNode = this.root;
    let i = position;
    while (i !== 0) {
      lastNode = lastNode.next;
      i--;
    }
    let currentNext = { ...lastNode };
    lastNode.data = newNode;
    lastNode.next = currentNext;
  }

  print() {
    let currentNode = this.root;
    const dataArray = [];
    while (currentNode.next != null) {
      dataArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    dataArray.push(currentNode.data);
  }

  reverseLinkList() {
    //catch edgecase if LL has only one Node
    let currentNode = this.root.next;
    const newLL = new LinkedList(new Node(this.root.data, null));
    while (currentNode.next != null) {
      newLL.addToStart(currentNode.data);
      currentNode = currentNode.next;
    }
    newLL.addToStart(currentNode.data);
    this.root = newLL.root;
  }

  reverseLinkListV2() {
    let current = this.root;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.root = prev;
  }
}

module.exports.node = Node;
module.exports.linkedlist = LinkedList;
