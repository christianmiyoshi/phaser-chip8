import ibmBin from '@assets/ibm.bin';
import PhaserImg from '@objects/PhaserImg';
import { Display } from 'src/application/graphics/Display';
import { Emulator } from 'src/chip8/emulator/Emulator';

export class GameScene extends Phaser.Scene {
  emulator: Emulator;
  display: DisplayInterface;
  constructor() {
    super({ key: 'GameScene' });

    this.display = new Display();
    this.emulator = new Emulator(this.display);
    this.emulator.init();
  }

  create(): void {
    const particles = this.add.particles('particle');

    const phaser = PhaserImg.create(this, 400, 100);

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    emitter.startFollow(phaser);

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

  update(): void {}
}
