import { DataQueue, Node } from "./dataQueue.js";

let queue;

beforeEach(() => {
  queue = new DataQueue(new Node(1, new Node(2, new Node(3, null))));
  return queue;
});

test("Create new queue", () => {
  expect(queue.print()).toMatchObject([1, 2, 3]);
});

test("Add new data to the queue", () => {
  queue.put(4);
  expect(queue.print()).toMatchObject([1, 2, 3, 4]);
});

test("Take data from the queue", () => {
  queue.get();
  expect(queue.print()).toMatchObject([2, 3]);
});

test("Length of queue", () => {
  expect(queue.getLen()).toBe(3);
});
