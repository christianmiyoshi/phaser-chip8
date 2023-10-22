import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SetRegisterOpcode } from './SetRegisterOpcode';
import { SkipVxEqualsNNOpcode } from './SkipVxEqualsNNOpcode';

describe('Skip if register is equal to NN', () => {
  it('It should skip if value is equal to register X', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxEqualsNNOpcode(0x1, 0x23);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(4)
  });

  it('It should not skip if value is not equal to register X', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SkipVxEqualsNNOpcode(0x1, 0x40);
    emulator.cpu.pc = 2
    emulator.cpu.registersV[0x1] = 0x23
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.pc).toEqual(2)
  });
});
