import { Opcode } from './Opcode';

export class SetIndexRegisterOpcode extends Opcode {
  value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }
}
