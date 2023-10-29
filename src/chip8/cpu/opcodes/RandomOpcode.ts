import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { Opcode0XNN } from './Opcode0XNN';

export class RandomOpcode extends Opcode0XNN {
  execute(cpu: Cpu): void {
      const random = Math.random();
      const randomInteger = random * (0xff + 1)
      const maskedValue = randomInteger & this.value
      cpu.setRegisterValue(this.registerX, maskedValue)
  }
}
