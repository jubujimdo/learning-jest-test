import { LinkedList, Node } from "./linkedlist";

describe("Test Linkedlist methods", () => {
  let linkedlist;
  beforeEach(() => {
    linkedlist = new LinkedList(new Node(1, new Node(2, null)));
    return linkedlist;
  });

  test("Create linkedlist", () => {
    expect(linkedlist.print()).toMatchObject([1, 2]);
  });

  test("Appended new node", () => {
    linkedlist.append(3);
    expect(linkedlist.print()).toMatchObject([1, 2, 3]);
  });

  test("Add new node to start", () => {
    linkedlist.addToStart(3);
    expect(linkedlist.print()).toMatchObject([3, 1, 2]);
  });

  test("Remove last node", () => {
    linkedlist.pop();
    expect(linkedlist.print()).toMatchObject([1]);
  });

  test("Reverse Linklist", () => {
    linkedlist.append(3);
    linkedlist.append(4);
    linkedlist.reverseLinkList();

    expect(linkedlist.print()).toMatchObject([4, 3, 2, 1]);
  });

  test("Reverse Linklist, variant 2", () => {
    linkedlist.append(3);
    linkedlist.append(4);
    linkedlist.reverseLinkListV2();

    expect(linkedlist.print()).toMatchObject([4, 3, 2, 1]);
  });

  test("Add new node to certain position", () => {
    linkedlist.addToPosition(1, 7);
    expect(linkedlist.print()).toMatchObject([1, 7, 2]);
  });
});
