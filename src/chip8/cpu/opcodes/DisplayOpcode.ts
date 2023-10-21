import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export class DisplayOpcode extends Opcode {
  x: number;
  y: number;
  value: number;
  constructor(x: number, y: number, value: number) {
    super();
    this.x = x;
    this.y = y;
    this.value = value;
  }
  execute(cpu: Cpu): void {
    cpu.display.setPixel(this.x, this.y, !!this.value);
  }
}
