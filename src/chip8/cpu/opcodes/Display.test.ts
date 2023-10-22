import { Display, WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { ClearScreenOpcode } from './ClearScreenOpcode';
import { DisplayOpcode } from './DisplayOpcode';

describe('Display screen', () => {
  it('Display one row in center', () => {
    const display = new Display();
    const emulator = new Emulator(display);
    const opcode = new DisplayOpcode(0x1, 0x2, 0x1)
    emulator.cpu.registersV[0x1] = 0x1
    emulator.cpu.registersV[0x2] = 0x2
    emulator.cpu.registerI = 0x50
    emulator.memory.setValue(0x50, 0xff)
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0xf]).toEqual(0)
    for(let i=0; i<WIDTH; i++){
      for(let j=0; j<HEIGHT; j++){
        if(0x1 <= i && i<=0x8 && j === 0x2){
          expect(display.getPixel(i, j)).toEqual(true)
          continue
        }
        expect(display.getPixel(i,j)).toEqual(false)
      }      
    }
  });

  it('Wrap horizontally', () => {
    const display = new Display();
    const emulator = new Emulator(display);
    const opcode = new DisplayOpcode(0x1, 0x2, 0x1)
    emulator.cpu.registersV[0x1] = 63
    emulator.cpu.registersV[0x2] = 0x2
    emulator.cpu.registerI = 0x50
    emulator.memory.setValue(0x50, 0xff)
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0xf]).toEqual(0)
    for(let i=0; i<WIDTH; i++){
      for(let j=0; j<HEIGHT; j++){
        if(i === 63 && j === 0x2){
          expect(display.getPixel(i, j)).toEqual(true)
          continue
        }
        expect(display.getPixel(i,j)).toEqual(false)
      }      
    }
  });

  it('Wrap vertically', () => {
    const display = new Display();
    const emulator = new Emulator(display);
    const opcode = new DisplayOpcode(0x1, 0x2, 0x8)
    emulator.cpu.registersV[0x1] = 0
    emulator.cpu.registersV[0x2] = 31
    emulator.cpu.registerI = 0x50
    emulator.memory.setValue(0x50, 0xff)
    opcode.execute(emulator.cpu)
    expect(emulator.cpu.registersV[0xf]).toEqual(0)
    for(let i=0; i<WIDTH; i++){
      for(let j=0; j<HEIGHT; j++){
        if(i < 8 && j >= 31){
          expect(display.getPixel(i, j)).toEqual(true)
          continue
        }
        expect(display.getPixel(i,j)).toEqual(false)
      }      
    }
  });

  it('Draw sprite', () => {
    const display = new Display();
    const emulator = new Emulator(display);
    const opcode = new DisplayOpcode(0x4, 0x5, 0x4)
    emulator.cpu.registersV[0x4] = 2
    emulator.cpu.registersV[0x5] = 1
    emulator.cpu.registerI = 0x50
    emulator.memory.setValue(0x50, 0b11000011)
    emulator.memory.setValue(0x51, 0b00111100)
    emulator.memory.setValue(0x52, 0b10101010)
    emulator.memory.setValue(0x53, 0b01010101)
    opcode.execute(emulator.cpu)

    const expectedPixels = {
      '2-1': 1, '3-1': 1, '4-1': 0, '5-1': 0, '6-1': 0, '7-1': 0, '8-1': 1, '9-1': 1,
      '2-2': 0, '3-2': 0, '4-2': 1, '5-2': 1, '6-2': 1, '7-2': 1, '8-2': 0, '9-2': 0,
      '2-3': 1, '3-3': 0, '4-3': 1, '5-3': 0, '6-3': 1, '7-3': 0, '8-3': 1, '9-3': 0,
      '2-4': 0, '3-4': 1, '4-4': 0, '5-4': 1, '6-4': 0, '7-4': 1, '8-4': 0, '9-4': 1,
    }

    expect(emulator.cpu.registersV[0xf]).toEqual(0)
    for(let i=0; i<WIDTH; i++){
      for(let j=0; j<HEIGHT; j++){
        const key = `${i}-${j}`
        if(key in expectedPixels){
          expect(display.getPixel(i,j)).toEqual(!!expectedPixels[key as keyof typeof expectedPixels])
          continue
        }
        expect(display.getPixel(i,j)).toEqual(false)
      }      
    }
  });

  it('Set register VF if there is a collision', () => {
    const display = new Display();
    const emulator = new Emulator(display);
    const opcode = new DisplayOpcode(0x1, 0x2, 0x1)
    emulator.cpu.registersV[0x1] = 0
    emulator.cpu.registersV[0x2] = 0
    emulator.cpu.registerI = 0x50
    emulator.memory.setValue(0x50, 0b10000000)
    display.setPixel(0, 0, true)
    opcode.execute(emulator.cpu)    
    expect(emulator.cpu.registersV[0xf]).toEqual(1)
    expect(display.getPixel(0,0)).toEqual(true)
  });
});
