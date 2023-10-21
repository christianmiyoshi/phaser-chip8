import { Display, WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Emulator } from '../../emulator/Emulator';
import { ClearScreenOpcode } from './ClearScreenOpcode';

describe('Clear screen', () => {
  it('Add register', () => {
    const display = new Display();
    const emulator = new Emulator(display);

    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        display.setPixel(i, j, true);
      }
    }
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        expect(display.getPixel(i, j)).toBe(true);
      }
    }
    const opcode = new ClearScreenOpcode();
    opcode.execute(emulator.cpu);
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        expect(display.getPixel(i, j)).toBe(false);
      }
    }
  });
});
