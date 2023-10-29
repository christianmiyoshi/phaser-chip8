import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { OpcodeXY0 } from './Opcode0XY0';
import { SkipOpcode } from './SkipOpcode';

export class SubtractVxMinusVyOpcode extends OpcodeXY0 {  
  execute(cpu: Cpu): void {

    const result = cpu.registersV[this.registerX] - cpu.registersV[this.registerY]
    if(result >= 0){
      cpu.registersV[0xf] = 1
    }else{
      cpu.registersV[0xf] = 0
    }

    cpu.setRegisterValue(this.registerX, (result + 256) % 256)
  }
}
