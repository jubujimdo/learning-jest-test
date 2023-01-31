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

test("Add new data to empty queue", () => {
  let emptyQueue = new DataQueue();
  emptyQueue.put(1);
  expect(emptyQueue.print()).toMatchObject([1]);
});

test("Take data from the queue", () => {
  queue.get();
  expect(queue.print()).toMatchObject([2, 3]);
});

test("Use data from the queue", () => {
  const result = queue.get();
  expect(result).toBe(1);
});

test("Take data from empty queue", () => {
  let emptyQueue = new DataQueue();
  expect(() => toThrow(new Error("Your queue is empty")));
});

test("Length of queue", () => {
  expect(queue.getLen()).toBe(3);
});
