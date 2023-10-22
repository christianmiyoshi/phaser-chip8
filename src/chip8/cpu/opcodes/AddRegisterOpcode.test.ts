import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { AddRegisterOpcode } from './AddRegisterOpcode';

describe('Add register opcode', () => {
  it('Add register', () => {
    const emulator = new Emulator(new Display());    
    const opcode = new AddRegisterOpcode(0xf, 0x11);
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0xf]).toEqual(0x11)
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0xf]).toEqual(0x22)
  });

  it('Add does not overwrite value', () => {
    const emulator = new Emulator(new Display());    
    const opcode = new AddRegisterOpcode(0xf, 0x1);
    emulator.cpu.registersV[0xf] = 0xff
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0xf]).toEqual(0x0)
  });
});
