import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { AddCarryOpCode } from './AddCarryOpcode';
import { BinaryAndOpcode } from './BinaryAndOpcode';
import { BinaryXorOpcode } from './BinaryXorOpcode';
import { SubtractVxMinusVyOpcode } from './SubtractVxMinusVyOpcode';

describe('Minus Opcode Vx-Vy', () => {
  it('Minus', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SubtractVxMinusVyOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 30)
    emulator.cpu.setRegisterValue(0x2, 20)
    emulator.cpu.setRegisterValue(0xf, 0)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(10);
    expect(emulator.cpu.registersV[0x2]).toEqual(20);

    expect(emulator.cpu.registersV[0xf]).toEqual(1)
  });

  it('Underflow', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SubtractVxMinusVyOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 0)
    emulator.cpu.setRegisterValue(0x2, 1)
    emulator.cpu.setRegisterValue(0xf, 1)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(255);
    expect(emulator.cpu.registersV[0x2]).toEqual(1);
    expect(emulator.cpu.registersV[0xf]).toEqual(0)
  });
});
