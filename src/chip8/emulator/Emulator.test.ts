import { Display } from '../../application/graphics/Display';
import { Emulator } from './Emulator';

describe('Emulator test', () => {
  it('Load rom', () => {
    const emulator = new Emulator(new Display());
    const data = new Uint8Array([0x1, 0x2, 0x3]);
    emulator.loadRom(data);

    expect(emulator.memory.getValue(0x200)).toEqual(0x1);
    expect(emulator.memory.getValue(0x201)).toEqual(0x2);
    expect(emulator.memory.getValue(0x202)).toEqual(0x3);
  });
});
