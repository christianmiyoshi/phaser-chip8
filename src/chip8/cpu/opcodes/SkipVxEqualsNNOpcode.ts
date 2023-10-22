import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { SkipOpcode } from './SkipOpcode';

export class SkipVxEqualsNNOpcode extends SkipOpcode {  
  value: number

  constructor(registerX: number, value: number){
    super(registerX)
    this.value = value
  }

  isSkipTrue(cpu: Cpu){
    return this.isRegisterEqualsToValue(cpu)
  };

  isRegisterEqualsToValue(cpu: Cpu){
    const registerValue = cpu.registersV[this.registerX]
    return registerValue === this.value
  }
}
