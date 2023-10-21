import { Cpu } from '../Cpu';

export abstract class Opcode {
  abstract execute(cpu: Cpu): void;
}
