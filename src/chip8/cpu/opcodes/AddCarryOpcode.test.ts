import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { AddCarryOpCode } from './AddCarryOpcode';
import { BinaryAndOpcode } from './BinaryAndOpcode';
import { BinaryXorOpcode } from './BinaryXorOpcode';

describe('Add carry Opcode', () => {
  it('Add', () => {
    const emulator = new Emulator(new Display());
    const opcode = new AddCarryOpCode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 10)
    emulator.cpu.setRegisterValue(0x2, 20)
    emulator.cpu.setRegisterValue(0xf, 1)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(30);
    expect(emulator.cpu.registersV[0x2]).toEqual(20);

    expect(emulator.cpu.registersV[0xf]).toEqual(0)
  });

  it('Add with carry flag', () => {
    const emulator = new Emulator(new Display());
    const opcode = new AddCarryOpCode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 255)
    emulator.cpu.setRegisterValue(0x2, 1)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(0);
    expect(emulator.cpu.registersV[0x2]).toEqual(1);
    expect(emulator.cpu.registersV[0xf]).toEqual(1)
  });
});
