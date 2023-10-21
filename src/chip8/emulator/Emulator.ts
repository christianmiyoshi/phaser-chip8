import { Memory } from '../memory/Memory';
import { Stack } from '../stack/Stack';

export class Emulator {
  memory: Memory;
  stack: Stack;
  display: DisplayInterface;

  constructor(display: DisplayInterface) {
    this.display = display;
    this.memory = new Memory();
    this.stack = new Stack();
  }

  init() {
    this.memory.loadFont(0x050);
  }

  loadRom(data: Uint8Array) {
    this.memory.load(0x200, data);
  }
}
