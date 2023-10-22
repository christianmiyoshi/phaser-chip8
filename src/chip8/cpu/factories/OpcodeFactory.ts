import { AddRegisterOpcode } from '../opcodes/AddRegisterOpcode';
import { ClearScreenOpcode } from '../opcodes/ClearScreenOpcode';
import { DisplayOpcode } from '../opcodes/DisplayOpcode';
import { JumpOpCode } from '../opcodes/JumpOpcode';
import { Opcode } from '../opcodes/Opcode';
import { SetIndexRegisterOpcode } from '../opcodes/SetIndexRegisterOpcode';
import { SetRegisterOpcode } from '../opcodes/SetRegisterOpcode';

export class OpcodeFactory {
  static build(instruction: number): Opcode | null {
    const bytes = [
      instruction & 0xf,
      (instruction >> 4) & 0xf,
      (instruction >> 8) & 0xf,
      (instruction >> 12) & 0xf,
    ];

    switch (bytes[3]) {
      case 0x0: {
        return new ClearScreenOpcode();
      }
      case 0x1: {
        return new JumpOpCode(instruction & 0x0fff);
      }
      case 0x6: {
        return new SetRegisterOpcode(bytes[2], instruction & 0x00ff);
      }
      case 0x7: {
        return new AddRegisterOpcode(bytes[2], instruction & 0x00ff);
      }
      case 0xa: {
        return new SetIndexRegisterOpcode(instruction & 0x0fff);
      }
      case 0xd: {
        return new DisplayOpcode(bytes[2], bytes[1], bytes[0]);
      }
    }
    return null
  }
}
