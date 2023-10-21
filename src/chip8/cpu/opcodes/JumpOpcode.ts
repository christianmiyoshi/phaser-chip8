import { Opcode } from './Opcode';

export class JumpOpCode extends Opcode {
  value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }
}
