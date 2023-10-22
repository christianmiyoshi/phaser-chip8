import { Memory } from '../memory/Memory';
import { Opcode } from './opcodes/Opcode';
import { OpcodeFactory } from './factories/OpcodeFactory';

export class Cpu {
  pc: number;
  memory: Memory;
  display: DisplayInterface;
  currentOpcode: Opcode | null;
  registerI: number;
  registersV: number[];

  NUMBER_REGISTERS_V = 16;

  constructor(memory: Memory, display: DisplayInterface) {
    this.pc = 0x200;
    this.memory = memory;
    this.display = display;
    this.currentOpcode = null;
    this.registerI = 0;
    this.registersV = Array.from(Array(this.NUMBER_REGISTERS_V), () => 0);
  }

  fetch() {
    const instruction_high = this.memory.getValue(this.pc);
    const instruction_low = this.memory.getValue(this.pc + 1);
    const instruction = (instruction_high << 8) + instruction_low;
    this.currentOpcode = OpcodeFactory.build(instruction);
    this.pc += 2;
  }

  execute() {
    if (this.currentOpcode == null) {
      return; //TODO: DO NOT COMMIT
      throw Error('Opcode null');      
    }

    this.currentOpcode.execute(this);
  }

  clearRegisterI(){
    this.registerI = 0
  }

  setRegisterValue(index: number, value : number){
    this.registersV[index] = value & 0xff
  }
  
  addRegisterValue(index: number, value : number){
    this.setRegisterValue(index, this.registersV[index] + value)
  }
}
