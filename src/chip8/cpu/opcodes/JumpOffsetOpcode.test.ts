import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { JumpOffsetOpCode } from './JumpOffsetOpcode';

describe('Jump offset opcode', () => {
  it('Jump test', () => {
    const emulator = new Emulator(new Display());
    const opcode = new JumpOffsetOpCode(0x456);
    emulator.cpu.setRegisterValue(0, 0x11);
    opcode.execute(emulator.cpu);
    expect(emulator.cpu.pc).toEqual(0x11 + 0x456);
  });
});
