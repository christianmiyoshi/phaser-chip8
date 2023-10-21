import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export class JumpOpCode extends Opcode {
  value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }

  execute(cpu: Cpu): void {
    cpu.pc = this.value;
  }
}
