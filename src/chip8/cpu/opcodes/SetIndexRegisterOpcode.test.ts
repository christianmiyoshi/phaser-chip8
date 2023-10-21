import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SetIndexRegisterOpcode } from './SetIndexRegisterOpcode';
import { SetRegisterOpcode } from './SetRegisterOpcode';

describe('Set index register opcode', () => {
  it('Set register I', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SetIndexRegisterOpcode(0x123);
    opcode.execute(emulator.cpu);
    expect(emulator.cpu.registerI).toEqual(0x123);
  });
});
