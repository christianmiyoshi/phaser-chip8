import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { RightShiftOpcode } from './RightShiftOpcode';
import { SetIndexRegisterOpcode } from './SetIndexRegisterOpcode';

describe('RightShiftOpcode', () => {
  it('Right Shift with vx <= vy', () => {
    const emulator = new Emulator(new Display());
    const opcode = new RightShiftOpcode(0x1, 0x2);

    emulator.cpu.setRegisterValue(0x1, 0b00000000)
    emulator.cpu.setRegisterValue(0x2, 0b11110001)
    opcode.execute(emulator.cpu);
    expect(emulator.cpu.registersV[0x1]).toEqual(0b01111000);
    expect(emulator.cpu.registersV[0xf]).toEqual(1)
    expect(emulator.cpu.registersV[0x2]).toEqual(0b11110001);
  });
});
