import { Memory } from 'src/chip8/memory/Memory';
import { Cpu } from '../Cpu';

export abstract class Opcode {
  abstract execute(cpu: Cpu): void;
}
