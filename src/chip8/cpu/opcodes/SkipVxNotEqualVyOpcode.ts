import { Cpu } from '../Cpu';
import { SkipVxEqualVyOpcode } from './SkipVxEqualVyOpcode';


export class SkipVxNotEqualVyOpcode extends SkipVxEqualVyOpcode {  
  isSkipTrue(cpu: Cpu){
    return !this.isRegisterVxEqualsToRegisterVy(cpu)
  };
}
