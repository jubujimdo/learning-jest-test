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

function reverseListLoop(list) {
  let head = list;
  let reverseList = null;

  while (head.next) {
    reverseList = {
      value: head.value,
      next: reverseList,
    };
    head = head.next;
  }
  return (reverseList = {
    value: head.value,
    next: reverseList,
  });
}

function reverseListRec(list) {
  // base case
  if (list === null || list.next === null) {
    return list;
  }
  let reversedList = reverseListRec(list.next);
  list.next.next = list;
  list.next = null;
  return reversedList;
}

console.time("Loop");
console.log(reverseListLoop(list));
console.timeEnd("Loop");

console.time("Rec");
console.log(reverseListRec(list));
console.timeEnd("Rec");
