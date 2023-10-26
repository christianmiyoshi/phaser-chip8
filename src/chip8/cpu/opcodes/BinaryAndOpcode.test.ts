import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { BinaryAndOpcode } from './BinaryAndOpcode';

describe('Binary And Opcode', () => {
  it('And', () => {
    const emulator = new Emulator(new Display());
    const opcode = new BinaryAndOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 0b11110000)
    emulator.cpu.setRegisterValue(0x2, 0b00110011)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(0b00110000);
    expect(emulator.cpu.registersV[0x2]).toEqual(0b00110011);
  });
});
