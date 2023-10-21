import { ClearScreenOpcode } from '../opcodes/ClearScreenOpcode';
import { JumpOpCode } from '../opcodes/JumpOpcode';
import { OpcodeFactory } from './OpcodeFactory';
import { SetRegisterOpcode } from '../opcodes/SetRegisterOpcode';
import { AddRegisterOpcode } from '../opcodes/AddRegisterOpcode';
import { SetIndexRegisterOpcode } from '../opcodes/SetIndexRegisterOpcode';
import { DisplayOpcode } from '../opcodes/DisplayOpcode';

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

  it('Add value to register', () => {
    const opcode = OpcodeFactory.build(0x7abc);
    expect(opcode).toBeInstanceOf(AddRegisterOpcode);
    const jump = opcode as AddRegisterOpcode;
    expect(jump.register).toEqual(0xa);
    expect(jump.value).toEqual(0xbc);
  });

  it('Set index register', () => {
    const opcode = OpcodeFactory.build(0xa123);
    expect(opcode).toBeInstanceOf(SetIndexRegisterOpcode);
    const jump = opcode as SetIndexRegisterOpcode;
    expect(jump.value).toEqual(0x123);
  });

  it('Display', () => {
    const opcode = OpcodeFactory.build(0xd123);
    expect(opcode).toBeInstanceOf(DisplayOpcode);
    const display = opcode as DisplayOpcode;
    expect(display.x).toEqual(0x1);
    expect(display.y).toEqual(0x2);
    expect(display.value).toEqual(0x3);
  });
});
