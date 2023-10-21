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
}
