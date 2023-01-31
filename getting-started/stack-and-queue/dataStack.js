function putDataInKeys(data) {
  const s = { 0: 0, 1: {} };
  for (const element of data) {
    s[1][s[0]] = element;
    s[0]++;
  }
  return s;
}
export class DataStack {
  constructor(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid data. Please use an array");
    }
    const stack = putDataInKeys(data);
    this.data = stack[1];
    this.length = stack[0];
  }

  //put
  put(newData) {
    this.data[this.length] = newData;
    this.length++;
  }

  //get
  get() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  print() {
    let r = [];
    for (const key in this.data) {
      r.push(this.data[key]);
    }
    return r;
  }
}

// []{}()
// () -> true
// ()) -> false
// ([{()}])()[[()]]{}() -> true
// (){[]}} -> false
