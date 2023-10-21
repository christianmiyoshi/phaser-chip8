import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SetRegisterOpcode } from './SetRegisterOpcode';

describe('Set register opcode', () => {
  it('Set register', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SetRegisterOpcode(0x1, 0x23);

    opcode.execute(emulator.cpu);
    expect(emulator.cpu.registersV[0x1]).toEqual(0x23);
  });
});
