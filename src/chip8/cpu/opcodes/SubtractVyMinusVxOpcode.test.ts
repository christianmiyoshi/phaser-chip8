import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { SubtractVyMinusVxOpcode } from './SubtractVyMinusVxOpcode';
describe('Minus Opcode Vy-Vx', () => {
  it('Minus', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SubtractVyMinusVxOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 20)
    emulator.cpu.setRegisterValue(0x2, 30)
    emulator.cpu.setRegisterValue(0xf, 0)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(10);
    expect(emulator.cpu.registersV[0x2]).toEqual(30);

    expect(emulator.cpu.registersV[0xf]).toEqual(1)
  });

  it('Underflow', () => {
    const emulator = new Emulator(new Display());
    const opcode = new SubtractVyMinusVxOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 1)
    emulator.cpu.setRegisterValue(0x2, 0)
    emulator.cpu.setRegisterValue(0xf, 1)
    opcode.execute(emulator.cpu);

    expect(emulator.cpu.registersV[0x1]).toEqual(255);
    expect(emulator.cpu.registersV[0x2]).toEqual(0);
    expect(emulator.cpu.registersV[0xf]).toEqual(0)
  });
});
