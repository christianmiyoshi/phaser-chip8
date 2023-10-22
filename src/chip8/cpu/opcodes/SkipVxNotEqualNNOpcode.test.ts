import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SkipVxNotEqualNNOpcode } from './SkipVxNotEqualNNOpcode';

describe('Skip if register not equal to NN', () => {
  it('It should not skip if value equal to register X', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxNotEqualNNOpcode(0x1, 0x23);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(2)
  });

  it('It should not skip if value not equal to register X', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxNotEqualNNOpcode(0x1, 0x40);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(4)
  });
});
