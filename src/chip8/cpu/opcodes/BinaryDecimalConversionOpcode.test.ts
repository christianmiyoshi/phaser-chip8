import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { AddRegisterOpcode } from './AddRegisterOpcode';
import { BinaryDecimalConversionOpcode } from './BinaryDecimalConversionOpcode';

describe('BinaryDecimalConversionOpcode', () => {
  it('BinaryDecimalConversionOpcode', () => {
    const emulator = new Emulator(new Display());    
    const opcode = new BinaryDecimalConversionOpcode(0x1);

    emulator.cpu.registersV[0x1] = 123
    emulator.cpu.registerI = 0x40

    opcode.execute(emulator.cpu)

    expect(emulator.memory.getValue(0x40)).toEqual(1)
    expect(emulator.memory.getValue(0x41)).toEqual(2)
    expect(emulator.memory.getValue(0x42)).toEqual(3)
  });
});
