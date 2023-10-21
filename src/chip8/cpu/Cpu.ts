import { Emulator } from '../emulator/Emulator';
import { Memory } from '../memory/Memory';
import { Opcode } from './opcodes/Opcode';
import { OpcodeFactory } from './factories/OpcodeFactory';

export class Cpu {
  pc: number;
  memory: Memory;
  currentOpcode: Opcode | null;

  constructor(memory: Memory) {
    this.memory = memory;
    this.currentOpcode = null;
  }

  fetch() {
    const instruction_high = this.memory.getValue(this.pc);
    const instruction_low = this.memory.getValue(this.pc + 1);
    const instruction = (instruction_high << 8) + instruction_low;
    this.currentOpcode = OpcodeFactory.build(instruction);
    this.pc += 2;
  }
}
