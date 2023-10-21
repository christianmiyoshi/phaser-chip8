import { ClearScreenOpcode } from './ClearScreenOpcode';
import { JumpOpCode } from './JumpOpcode';
import { Opcode } from './Opcode';
import { SetRegisterOpcode } from './SetRegisterOpcode';

export class OpcodeFactory {
  static build(instruction: number): Opcode {
    const bytes = [
      instruction & 0xf,
      (instruction >> 4) & 0xf,
      (instruction >> 8) & 0xf,
      (instruction >> 12) & 0xf,
    ];

    if (instruction === 0x00e0) return new ClearScreenOpcode();
    if (bytes[3] === 1) return new JumpOpCode(instruction & 0x0fff);
    if (bytes[3] === 6)
      return new SetRegisterOpcode(bytes[2], instruction & 0x00ff);

    throw Error('Opcode not recognized');
  }
}
