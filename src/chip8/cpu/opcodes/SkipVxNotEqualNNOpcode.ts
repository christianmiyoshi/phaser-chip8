import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';
import { SkipOpcode } from './SkipOpcode';
import { SkipVxEqualsNNOpcode } from './SkipVxEqualsNNOpcode';

export class SkipVxNotEqualNNOpcode extends SkipVxEqualsNNOpcode {  
  isSkipTrue(cpu: Cpu){
    return !this.isRegisterEqualsToValue(cpu)
  };
}
