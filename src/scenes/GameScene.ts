import ibmBin from '@assets/ibm.ch8';
import PhaserImg from '@objects/PhaserImg';
import { Display, WIDTH, HEIGHT } from 'src/application/graphics/Display';
import { Emulator } from 'src/chip8/emulator/Emulator';

export class GameScene extends Phaser.Scene {
  emulator: Emulator;
  display: DisplayInterface;
  graphics: Phaser.GameObjects.Graphics;

  constructor() {
    super({ key: 'GameScene' });

    this.display = new Display();
    this.emulator = new Emulator(this.display);
    this.emulator.init();
  }

  create(): void {
    this.graphics = this.add.graphics();
    const data = this.cache.binary.get('ibm') as Uint8Array;
    this.emulator.loadRom(data);
  }

  preload(): void {
    this.load.binary({
      key: 'ibm',
      url: ibmBin,
      dataType: Uint8Array,
    });
  }

  update(): void {
    this.emulator.cycle();
    this.graphics.clear();
    const colorWhite = 0xffffff;
    const colorBlack = 0x0;
    const alpha = 0.5;
    for (let i = 0; i < WIDTH; ++i) {
      for (let j = 0; j < HEIGHT; ++j) {
        const pixel = this.display.getPixel(i, j);
        const color = pixel ? colorWhite : colorBlack;
        this.graphics.fillStyle(color, alpha);
        this.graphics.fillRect(20 * i, 20 * j, 20, 20);
      }
    }
  }
}
