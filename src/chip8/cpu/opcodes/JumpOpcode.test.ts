import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { JumpOpCode } from './JumpOpcode';

describe('Jump opcode', () => {
  it('Jump test', () => {
    const emulator = new Emulator(new Display());
    const opcode = new JumpOpCode(0x123);

    opcode.execute(emulator.cpu);

    expect(emulator.cpu.pc).toEqual(0x123);
  });
});
