import { Opcode } from './Opcode';

export class AddRegisterOpcode extends Opcode {
  register: number;
  value: number;
  constructor(register: number, value: number) {
    super();
    this.register = register;
    this.value = value;
  }
}
