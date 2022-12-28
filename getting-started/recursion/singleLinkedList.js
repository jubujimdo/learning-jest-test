let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListLoop(list) {
  let head = list;

  while (head.next) {
    console.log(head.value);
    head = head.next;
  }
  console.log(head.value);
}

function printListRecursion(list) {
  let head = list;
  if (!head.next) {
    console.log(head.value);
  } else {
    console.log(head.value);
    printListRecursion(head.next);
  }
}

function printListRecursionSolution(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursionSolution(list.next);
  }
}

console.time("RecursionSolution");
printListRecursionSolution(list);
console.timeEnd("RecursionSolution");

console.time("Loop");
printListLoop(list);
console.timeEnd("Loop");

console.time("Recursion");
printListRecursion(list);
console.timeEnd("Recursion");
