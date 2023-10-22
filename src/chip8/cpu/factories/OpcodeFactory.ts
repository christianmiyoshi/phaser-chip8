import { AddRegisterOpcode } from '../opcodes/AddRegisterOpcode';
import { BinaryDecimalConversionOpcode } from '../opcodes/BinaryDecimalConversionOpcode';
import { ClearScreenOpcode } from '../opcodes/ClearScreenOpcode';
import { DisplayOpcode } from '../opcodes/DisplayOpcode';
import { JumpOpCode } from '../opcodes/JumpOpcode';
import { Opcode } from '../opcodes/Opcode';
import { SetIndexRegisterOpcode } from '../opcodes/SetIndexRegisterOpcode';
import { SetRegisterOpcode } from '../opcodes/SetRegisterOpcode';
import { SetRegisterVxEqualVy } from '../opcodes/SetRegisterVxEqualVy';
import { SkipVxEqualVyOpcode } from '../opcodes/SkipVxEqualVyOpcode';
import { SkipVxEqualsNNOpcode } from '../opcodes/SkipVxEqualsNNOpcode';
import { SkipVxNotEqualNNOpcode } from '../opcodes/SkipVxNotEqualNNOpcode';
import { SkipVxNotEqualVyOpcode } from '../opcodes/SkipVxNotEqualVyOpcode';

export class OpcodeFactory {
  static build(instruction: number): Opcode | null {
    const bytes = [
      instruction & 0xf,
      (instruction >> 4) & 0xf,
      (instruction >> 8) & 0xf,
      (instruction >> 12) & 0xf,
    ];

    switch (bytes[3]) {
      case 0x0: return new ClearScreenOpcode();
      case 0x1: return new JumpOpCode(instruction & 0x0fff);
      case 0x3: return new SkipVxEqualsNNOpcode(bytes[2], instruction & 0xff);
      case 0x4: return new SkipVxNotEqualNNOpcode(bytes[2], instruction & 0xff);
      case 0x5: {
        if(bytes[0] === 0){
          return new SkipVxEqualVyOpcode(bytes[2], bytes[1]);
        }
        break;
      }
      case 0x6: return new SetRegisterOpcode(bytes[2], instruction & 0x00ff);
      case 0x7: return new AddRegisterOpcode(bytes[2], instruction & 0x00ff);
      case 0x8: {
        if(bytes[0] === 0){
          return new SetRegisterVxEqualVy(bytes[2], bytes[1]);
        }
        break;
      }
      case 0x9: {
        if(bytes[0] === 0){
          return new SkipVxNotEqualVyOpcode(bytes[2], bytes[1]);
        }
        break;
      }
      case 0xa: return new SetIndexRegisterOpcode(instruction & 0x0fff);
      case 0xd: return new DisplayOpcode(bytes[2], bytes[1], bytes[0]);
      case 0xf: {
        switch(instruction & 0xff){
          case 0x33: return new BinaryDecimalConversionOpcode(bytes[2]);
        }
        break
      }
    }
    return null
  }
}
