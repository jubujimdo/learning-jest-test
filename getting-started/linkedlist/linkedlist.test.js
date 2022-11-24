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

  describe("Append nodes", () => {
    test("Appended new node", () => {
      linkedlist.append(3);
      expect(linkedlist.print()).toMatchObject([1, 2, 3]);
    });

    test("Appended new node to empty list", () => {
      let emptyList = new LinkedList(null);
      emptyList.append(3);
      expect(emptyList.print()).toMatchObject([3]);
    });
  });

  describe("Add nodes to start", () => {
    test("Add new node to start", () => {
      linkedlist.addToStart(3);
      expect(linkedlist.print()).toMatchObject([3, 1, 2]);
    });

    test("Add new node to start on empty list", () => {
      let emptyList = new LinkedList(null);
      emptyList.addToStart(3);
      expect(emptyList.print()).toMatchObject([3]);
    });
  });

  describe("Remove nodes", () => {
    test("Remove last node", () => {
      linkedlist.pop();
      expect(linkedlist.print()).toMatchObject([1]);
    });

    test("Remove last node from Linkedlist of length 1", () => {
      let shortLinkedlist = new LinkedList(new Node(1, null));
      shortLinkedlist.pop();
      expect(shortLinkedlist.print()).toMatchObject([]);
    });

    test("Remove last node from empty Linkedlist", () => {
      let emptyList = new LinkedList(null);
      emptyList.pop();
      expect(emptyList.print()).toMatchObject([]);
    });
  });

  describe("Remove nodes", () => {
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
  });

  describe("Add nodes to certain position", () => {
    test("Add new node to certain position in the middle", () => {
      linkedlist.addToPosition(7, 1);
      expect(linkedlist.print()).toMatchObject([1, 7, 2]);
    });
    test("Add new node to certain position at the beginning", () => {
      linkedlist.addToPosition(7, 0);
      expect(linkedlist.print()).toMatchObject([7, 1, 2]);
    });
    test("Add new node to certain position at the end", () => {
      linkedlist.addToPosition(7, 2);
      expect(linkedlist.print()).toMatchObject([1, 2, 7]);
    });
    test("Add new node to empty Linkedlist", () => {
      let emptyList = new LinkedList(null);
      emptyList.addToPosition(7, 1);
      expect(emptyList.print()).toMatchObject([7]);
    });
    test("Add new node to certain position longer than array length", () => {
      linkedlist.addToPosition(7, 4);
      expect(linkedlist.print()).toMatchObject([1, 2, 7]);
    });
  });
});
