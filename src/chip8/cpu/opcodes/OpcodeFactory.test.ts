import { ClearScreenOpcode } from './ClearScreenOpcode';
import { JumpOpCode } from './JumpOpcode';
import { OpcodeFactory } from './OpcodeFactory';
import { SetRegisterOpcode } from './SetRegisterOpcode';

describe('Opcode factory test', () => {
  it('Decode clear screen', () => {
    expect(OpcodeFactory.build(0x00e0)).toBeInstanceOf(ClearScreenOpcode);
  });

  it('Decode jump', () => {
    const opcode = OpcodeFactory.build(0x1abc);
    expect(opcode).toBeInstanceOf(JumpOpCode);
    const jump = opcode as JumpOpCode;
    expect(jump.value).toEqual(0xabc);
  });

  it('Decode set register', () => {
    const opcode = OpcodeFactory.build(0x6abc);
    expect(opcode).toBeInstanceOf(SetRegisterOpcode);
    const jump = opcode as SetRegisterOpcode;
    expect(jump.register).toEqual(0xa);
    expect(jump.value).toEqual(0xbc);
  });
});
