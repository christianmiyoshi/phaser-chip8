import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { AddRegisterOpcode } from './AddRegisterOpcode';
import { JumpOpCode } from './JumpOpcode';

describe('Add register opcode', () => {
  it('Add register', () => {
    const emulator = new Emulator(new Display());
    expect(emulator.cpu.registersV[0x1]).toEqual(0x00);
    const opcode = new AddRegisterOpcode(0x1, 0x12);
    opcode.execute(emulator.cpu);
    expect(emulator.cpu.registersV[0x1]).toEqual(0x12);
    opcode.execute(emulator.cpu);
    expect(emulator.cpu.registersV[0x1]).toEqual(0x24);
  });
});
