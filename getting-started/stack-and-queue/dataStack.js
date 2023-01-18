export class DataStack {
  constructor(length, data) {
    this.length = length;
    this.data = data;
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
