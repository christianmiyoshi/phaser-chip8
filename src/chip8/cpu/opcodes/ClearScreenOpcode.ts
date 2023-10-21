import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export class ClearScreenOpcode extends Opcode {
  execute(cpu: Cpu): void {
    cpu.display.clear();
  }
}
