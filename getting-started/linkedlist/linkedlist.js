export class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

export class LinkedList {
  constructor(root) {
    this.root = root;
  }

  append(newLastNode) {
    let currentNode = this.root;
    if (currentNode === null) {
      this.root = new Node(newLastNode, null);
      return;
    }
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(newLastNode, null);
  }

  addToStart(newFirstNode) {
    if (this.root === null) {
      this.root = new Node(newFirstNode, null);
      return;
    }
    const currentLL = { ...this.root };
    this.root.data = newFirstNode;
    this.root.next = new Node(currentLL.data, currentLL.next);
  }

  pop() {
    let lastNode = this.root;
    let prev = lastNode;
    let i = 0;
    if (this.root === null || this.root.next === null) {
      this.root = null;
      return;
    }
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
      if (lastNode === null) {
        this.root = new Node(newNode, null);
        return;
      }
      if (lastNode.next === null) {
        lastNode.next = new Node(newNode, null);
        return;
      }
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
    if (currentNode === null) {
      return dataArray;
    }
    while (currentNode.next != null) {
      dataArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    dataArray.push(currentNode.data);
    return dataArray;
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
