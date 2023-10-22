import { ClearScreenOpcode } from '../opcodes/ClearScreenOpcode';
import { JumpOpCode } from '../opcodes/JumpOpcode';
import { OpcodeFactory } from './OpcodeFactory';
import { SetRegisterOpcode } from '../opcodes/SetRegisterOpcode';
import { AddRegisterOpcode } from '../opcodes/AddRegisterOpcode';
import { SetIndexRegisterOpcode } from '../opcodes/SetIndexRegisterOpcode';
import { DisplayOpcode } from '../opcodes/DisplayOpcode';
import { BinaryDecimalConversionOpcode } from '../opcodes/BinaryDecimalConversionOpcode';
import { SkipVxEqualsNNOpcode } from '../opcodes/SkipVxEqualsNNOpcode';
import { SkipVxNotEqualNNOpcode } from '../opcodes/SkipVxNotEqualNNOpcode';

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
  it('Binary-coded decimal conversion', () => {
    const opcode = OpcodeFactory.build(0xf133);
    expect(opcode).toBeInstanceOf(BinaryDecimalConversionOpcode);
    const display = opcode as BinaryDecimalConversionOpcode;
    expect(display.register).toEqual(0x1);
  });

  it('Skip 3xNN', () => {
    const opcode = OpcodeFactory.build(0x3123);
    expect(opcode).toBeInstanceOf(SkipVxEqualsNNOpcode);
    const display = opcode as SkipVxEqualsNNOpcode;
    expect(display.registerX).toEqual(0x1);
    expect(display.value).toEqual(0x23);
  });

  it('Skip 4xNN', () => {
    const opcode = OpcodeFactory.build(0x4123);
    expect(opcode).toBeInstanceOf(SkipVxNotEqualNNOpcode);
    const display = opcode as SkipVxNotEqualNNOpcode;
    expect(display.registerX).toEqual(0x1);
    expect(display.value).toEqual(0x23);
  });
});
