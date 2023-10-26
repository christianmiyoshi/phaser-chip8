import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { OpcodeXY0 } from './Opcode0XY0';
import { SkipOpcode } from './SkipOpcode';

export class BinaryAndOpcode extends OpcodeXY0 {  
  execute(cpu: Cpu): void {
    cpu.registersV[this.registerX] = cpu.registersV[this.registerY] & cpu.registersV[this.registerX];
  }
}
