import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export class SetRegisterOpcode extends Opcode {
  register: number;
  value: number;
  constructor(register: number, value: number) {
    super();
    this.register = register;
    this.value = value;
  }
  execute(cpu: Cpu): void {
    cpu.registersV[this.register] = this.value;
  }
}
