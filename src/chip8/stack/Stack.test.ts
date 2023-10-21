import { Stack } from './Stack';

describe('Stack test', () => {
  it('Stack should push and pop values', () => {
    const stack = new Stack();
    stack.push(0x1);
    stack.push(0x2);
    stack.push(0x3);

    expect(0x3).toEqual(stack.pop());
    expect(0x2).toEqual(stack.pop());
    expect(0x1).toEqual(stack.pop());
  });
});
