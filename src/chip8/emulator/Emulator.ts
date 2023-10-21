import { Cpu } from '../cpu/Cpu';
import { Memory } from '../memory/Memory';
import { Stack } from '../stack/Stack';

export class Emulator {
  memory: Memory;
  stack: Stack;
  display: DisplayInterface;
  cpu: Cpu;

  private readonly ROM_START_ADDRESS = 0x200;

  constructor(display: DisplayInterface) {
    this.display = display;
    this.memory = new Memory();
    this.stack = new Stack();
    this.cpu = new Cpu(this.memory, this.display);
  }

  init() {
    this.memory.loadFont(0x050);
  }

  loadRom(data: Uint8Array) {
    this.memory.load(this.ROM_START_ADDRESS, data);
  }

  cycle() {
    this.cpu.fetch();
    this.cpu.execute();
  }
}
