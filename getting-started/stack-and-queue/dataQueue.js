export class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

function len(node) {
  if (node === null) {
    return 1;
  }
  return 1 + len(node.next);
}

export class DataQueue {
  constructor(root) {
    this.root = root;
  }

  put(newLastNode) {
    let currentNode = this.root;
    if (currentNode === null) {
      this.root = new Node(newLastNode, null);
      return this.root;
    }
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(newLastNode, null);
    return this.root;
  }

  get() {
    let firstNode = this.root;
    if (firstNode.next === null) {
      firstNode.data = firstNode.next;
      return;
    }
    firstNode.data = firstNode.next.data;
    firstNode.next = firstNode.next.next;
    return;
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

  getLen() {
    return len(this.root.next);
  }
}

//put

//get

//len
