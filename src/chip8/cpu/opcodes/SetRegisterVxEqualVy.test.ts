import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SetRegisterOpcode } from './SetRegisterOpcode';
import { SetRegisterVxEqualVy } from './SetRegisterVxEqualVy';

describe('Set register Vx equal to Vy', () => {
  it('Set register vx equal to vy', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SetRegisterVxEqualVy(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 0xa)
    emulator.cpu.setRegisterValue(0x2, 0xb)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(0xb);
    expect(emulator.cpu.registersV[0x2]).toEqual(0xb);
  });
});
