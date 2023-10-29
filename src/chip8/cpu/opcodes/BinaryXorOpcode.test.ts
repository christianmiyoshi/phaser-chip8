import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { BinaryAndOpcode } from './BinaryAndOpcode';
import { BinaryXorOpcode } from './BinaryXorOpcode';

describe('Binary Xor Opcode', () => {
  it('Xor', () => {
    const emulator = new Emulator(new Display());
    const opcode = new BinaryXorOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 0b00110011)
    emulator.cpu.setRegisterValue(0x2, 0b00001111)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(0b00111100);
    expect(emulator.cpu.registersV[0x2]).toEqual(0b00001111);
  });
});
