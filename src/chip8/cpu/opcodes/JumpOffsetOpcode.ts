import { Cpu } from '../Cpu';
import { Opcode0NNN } from './Opcode0NNN';

export class JumpOffsetOpCode extends Opcode0NNN {
  execute(cpu: Cpu): void {
    cpu.pc = this.value + cpu.registersV[0x0];
  }
}
