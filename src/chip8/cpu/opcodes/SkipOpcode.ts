import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export abstract class SkipOpcode extends Opcode {  
  abstract isSkipTrue(cpu: Cpu) : boolean;
  registerX: number

  constructor(registerX: number){
    super()
    this.registerX=registerX;
  }

  execute(cpu: Cpu): void {
    if(this.isSkipTrue(cpu)){
      cpu.pc += 2
    }
  }
}
