export class Stack {
  data: number[];

  constructor() {
    this.data = [];
  }

  push(value: number) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }
}
