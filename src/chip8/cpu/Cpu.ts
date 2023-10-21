import { Emulator } from '../emulator/Emulator';
import { Memory } from '../memory/Memory';

export class Cpu {
  pc: number;
  memory: Memory;
  currentOpcode: Opcode | null;

  constructor(memory: Memory) {
    this.memory = memory;
    this.currentOpcode = null;
  }

  fetch() {
    const instruction_low = this.memory.getValue(this.pc);
    const instruction_high = this.memory.getValue(this.pc + 1);
    const instruction = instruction_low + (instruction_high << 8);
    this.currentOpcode = OpcodeFactory.build(instruction);
    this.pc += 2;
  }
}
