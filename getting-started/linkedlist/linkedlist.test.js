const linkedlistClass = require("./linkedlist");

const Linkedlist = linkedlistClass.linkedlist;
const Node = linkedlistClass.node;

describe("Create Linkedlist", () => {
  const linkedlist = new Linkedlist(new Node(1, new Node(2, null)));

  test("Create linkedlist", () => {
    expect(linkedlist).toMatchObject({
      root: { data: 1, next: { data: 2, next: null } },
    });
  });
});

describe("Append new node", () => {
  const linkedlist = new Linkedlist(new Node(1, new Node(2, null)));

  linkedlist.append(3);

  test("Appended new node", () => {
    expect(linkedlist).toMatchObject({
      root: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
    });
  });
});

describe("Add new node to start", () => {
  const linkedlist = new Linkedlist(new Node(1, new Node(2, null)));

  linkedlist.addToStart(3);

  test("Add new node to start", () => {
    expect(linkedlist).toMatchObject({
      root: { data: 3, next: { data: 1, next: { data: 2, next: null } } },
    });
  });
});

describe("Remove last node", () => {
  const linkedlist = new Linkedlist(new Node(1, new Node(2, null)));

  linkedlist.pop();

  test("Remove last node", () => {
    expect(linkedlist).toMatchObject({
      root: { data: 1, next: null },
    });
  });
});

describe("Add new node to certain position", () => {
  const linkedlist = new Linkedlist(
    new Node(1, new Node(2, new Node(3, new Node(4, null))))
  );

  linkedlist.addToPosition(1, 7);

  test("Add new node to certain position", () => {
    expect(linkedlist).toMatchObject({
      root: {
        data: 1,
        next: {
          data: 7,
          next: { data: 2, next: { data: 3, next: { data: 4, next: null } } },
        },
      },
    });
  });
});

describe("Reverse Linklist", () => {
  const linkedlist = new Linkedlist(
    new Node(1, new Node(2, new Node(3, new Node(4, null))))
  );

  test("Reverse Linklist", () => {
    linkedlist.reverseLinkList();

    expect(linkedlist).toMatchObject({
      root: {
        data: 4,
        next: {
          data: 3,
          next: { data: 2, next: { data: 1, next: null } },
        },
      },
    });
  });

  test("Reverse Linklist", () => {
    linkedlist.reverseLinkListV2();

    expect(linkedlist).toMatchObject({
      root: {
        data: 1,
        next: {
          data: 2,
          next: { data: 3, next: { data: 4, next: null } },
        },
      },
    });
  });
});
