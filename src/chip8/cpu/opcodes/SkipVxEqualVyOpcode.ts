import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { SkipOpcode } from './SkipOpcode';
import { SkipVxEqualsNNOpcode } from './SkipVxEqualsNNOpcode';

export class SkipVxEqualVyOpcode extends SkipOpcode {  
  registerY: number;
  constructor(registerX: number, registerY: number){
    super(registerX)
    this.registerY=registerY;
  }

  isSkipTrue(cpu: Cpu){
    return this.isRegisterVxEqualsToRegisterVy(cpu)
  };

  isRegisterVxEqualsToRegisterVy(cpu: Cpu){
    const vx = cpu.registersV[this.registerX]
    const vy = cpu.registersV[this.registerY]
    return vx === vy
  };
}
