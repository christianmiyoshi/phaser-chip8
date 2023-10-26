import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { BinaryOrOpcode } from './BinaryOrOpcode';
import { SetRegisterOpcode } from './SetRegisterOpcode';
import { SetRegisterVxEqualVy } from './SetRegisterVxEqualVy';

describe('Binary Or Opcode', () => {
  it('Or', () => {
    const emulator = new Emulator(new Display());
    const opcode = new BinaryOrOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 0b11110000)
    emulator.cpu.setRegisterValue(0x2, 0b00110011)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(0b11110011);
    expect(emulator.cpu.registersV[0x2]).toEqual(0b00110011);
  });
});
