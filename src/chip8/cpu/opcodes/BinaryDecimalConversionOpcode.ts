import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export class BinaryDecimalConversionOpcode extends Opcode {
  register: number;
  constructor(register: number) {
    super();
    this.register = register;
  }
  execute(cpu: Cpu): void {
    const value = cpu.registersV[this.register]

    const digit3 = value % 10
    const digit2 = Math.floor(value / 10) % 10
    const digit1 = Math.floor(value / 100) % 10

    cpu.memory.setValue(cpu.registerI, digit1)
    cpu.memory.setValue(cpu.registerI + 1, digit2)
    cpu.memory.setValue(cpu.registerI + 2, digit3)
  }
}
