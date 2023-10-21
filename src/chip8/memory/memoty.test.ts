import { Memory } from './memory';

describe('Memory test', () => {
  it('Memory should set and get value', () => {
    const memory = new Memory();
    memory.setValue(0x200, 0xab);

    expect(0xab).toEqual(memory.getValue(0x200));
  });

  it('Memory should load font', () => {
    const memory = new Memory();
    memory.loadFont(0x200);

    expect(memory.getValue(0x200)).toEqual(0xf0);
    expect(memory.getValue(0x204)).toEqual(0xf0);
    expect(memory.getValue(0x205)).toEqual(0x20);
    expect(memory.getValue(0x206)).toEqual(0x60);
    expect(memory.getValue(0x209)).toEqual(0x70);
    expect(memory.getValue(0x24f)).toEqual(0x80);
  });
});
