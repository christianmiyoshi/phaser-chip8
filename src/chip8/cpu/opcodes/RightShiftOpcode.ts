import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { OpcodeXY0 } from './Opcode0XY0';
import { SkipOpcode } from './SkipOpcode';

export class RightShiftOpcode extends OpcodeXY0 {  
  execute(cpu: Cpu): void {
    cpu.registersV[this.registerX] = cpu.registersV[this.registerY]
    cpu.setRegisterValue(0xf, cpu.registersV[this.registerX] & 1)
    cpu.registersV[this.registerX] >>= 1    
  }
}
