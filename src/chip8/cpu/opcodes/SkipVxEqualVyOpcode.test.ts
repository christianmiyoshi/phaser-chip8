import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SkipVxEqualVyOpcode } from './SkipVxEqualVyOpcode';

describe('Skip if register vx is equal to VY', () => {
  it('It should skip if VX == VY', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxEqualVyOpcode(0x1, 0x2);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    emulator.cpu.registersV[0x2] = 0x23
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(4)
  });

  it('It should skip if VX != VY', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxEqualVyOpcode(0x1, 0x2);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    emulator.cpu.registersV[0x2] = 0x24
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(2)
  });
});
