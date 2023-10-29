import { Display } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { RandomOpcode } from './RandomOpcode';

describe('Random opcode Test', () => {
  afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
  })

  it('Random opcode test', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.99999);

    const emulator = new Emulator(new Display());
    const opcode = new RandomOpcode(0x1, 0xff);
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0x1]).toEqual(0xff)
  });

  it('Random opcode with mask 0x00', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.99999);

    const emulator = new Emulator(new Display());
    const opcode = new RandomOpcode(0x1, 0x00);
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0x1]).toEqual(0)
  });

  it('Random opcode', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    const emulator = new Emulator(new Display());
    const opcode = new RandomOpcode(0x1, 0xff);
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0x1]).toEqual(0x100 / 2)
  });
});
