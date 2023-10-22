import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SkipVxEqualVyOpcode } from './SkipVxEqualVyOpcode';
import { SkipVxNotEqualNNOpcode } from './SkipVxNotEqualNNOpcode';
import { SkipVxNotEqualVyOpcode } from './SkipVxNotEqualVyOpcode';

describe('Skip if register vx is not equal to VY', () => {
  it('It should skip if VX != VY', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxNotEqualVyOpcode(0x1, 0x2);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    emulator.cpu.registersV[0x2] = 0x23
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(2)
  });

  it('It should skip if VX == VY', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxNotEqualVyOpcode(0x1, 0x2);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    emulator.cpu.registersV[0x2] = 0x24
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(4)
  });
});
