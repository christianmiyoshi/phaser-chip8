import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { Opcode0XNN } from './Opcode0XNN';

export class AddRegisterOpcode extends Opcode0XNN {
  execute(cpu: Cpu): void {
    cpu.addRegisterValue(this.registerX, this.value)
  }
}
