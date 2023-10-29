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
import { SkipVxEqualVyOpcode } from '../opcodes/SkipVxEqualVyOpcode';
import { SkipVxNotEqualVyOpcode } from '../opcodes/SkipVxNotEqualVyOpcode';
import { SetRegisterVxEqualVy } from '../opcodes/SetRegisterVxEqualVy';
import { BinaryOrOpcode } from '../opcodes/BinaryOrOpcode';
import { BinaryAndOpcode } from '../opcodes/BinaryAndOpcode';
import { BinaryXorOpcode } from '../opcodes/BinaryXorOpcode';
import { AddCarryOpCode } from '../opcodes/AddCarryOpcode';
import { SubtractVxMinusVyOpcode } from '../opcodes/SubtractVxMinusVyOpcode';
import { SubtractVyMinusVxOpcode } from '../opcodes/SubtractVyMinusVxOpcode';
import { RightShiftOpcode } from '../opcodes/RightShiftOpcode';
import { LeftShiftOpcode } from '../opcodes/LeftShiftOpcode';
import { JumpOffsetOpCode } from '../opcodes/JumpOffsetOpcode';
import { RandomOpcode } from '../opcodes/RandomOpcode';

describe('Opcode factory test', () => {
  it('Decode clear screen 00e0', () => {
    expect(OpcodeFactory.build(0x00e0)).toBeInstanceOf(ClearScreenOpcode);
  });

  it('Decode jump 1NNN', () => {
    const opcode = OpcodeFactory.build(0x1abc);
    expect(opcode).toBeInstanceOf(JumpOpCode);
    const jump = opcode as JumpOpCode;
    expect(jump.value).toEqual(0xabc);
  });

  it('Decode set register 6XNN', () => {
    const opcode = OpcodeFactory.build(0x6abc);
    expect(opcode).toBeInstanceOf(SetRegisterOpcode);
    const jump = opcode as SetRegisterOpcode;
    expect(jump.register).toEqual(0xa);
    expect(jump.value).toEqual(0xbc);
  });

  it('Add 7XNN', () => {
    const opcode = OpcodeFactory.build(0x7abc);
    expect(opcode).toBeInstanceOf(AddRegisterOpcode);
    const jump = opcode as AddRegisterOpcode;
    expect(jump.registerX).toEqual(0xa);
    expect(jump.value).toEqual(0xbc);
  });

  it('Set Vx = Vy 8XY0', () => {
    const opcode = OpcodeFactory.build(0x8ab0);
    expect(opcode).toBeInstanceOf(SetRegisterVxEqualVy);
    const indexRegisterOpcode = opcode as SetRegisterVxEqualVy;
    expect(indexRegisterOpcode.registerX).toEqual(0xa);
    expect(indexRegisterOpcode.registerY).toEqual(0xb);
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

  it('Skip 5XY0', () => {
    const opcode = OpcodeFactory.build(0x5120);
    expect(opcode).toBeInstanceOf(SkipVxEqualVyOpcode);
    const display = opcode as SkipVxEqualVyOpcode;
    expect(display.registerX).toEqual(0x1);
    expect(display.registerY).toEqual(0x2);
  });
  it('Binary Or 8XY1', () => {
    const opcode = OpcodeFactory.build(0x8121);
    expect(opcode).toBeInstanceOf(BinaryOrOpcode);
    const display = opcode as BinaryOrOpcode;
    expect(display.registerX).toEqual(0x1);
    expect(display.registerY).toEqual(0x2);
  });
  it('Binary And 8XY2', () => {
    const opcode = OpcodeFactory.build(0x8ab2);
    expect(opcode).toBeInstanceOf(BinaryAndOpcode);
    const andOpcode = opcode as BinaryAndOpcode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Binary XOR 8XY3', () => {
    const opcode = OpcodeFactory.build(0x8ab3);
    expect(opcode).toBeInstanceOf(BinaryXorOpcode);
    const andOpcode = opcode as BinaryXorOpcode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Add Carry 8XY4', () => {
    const opcode = OpcodeFactory.build(0x8ab4);
    expect(opcode).toBeInstanceOf(AddCarryOpCode);
    const andOpcode = opcode as AddCarryOpCode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Sub Vx-Vy 8XY5', () => {
    const opcode = OpcodeFactory.build(0x8ab5);
    expect(opcode).toBeInstanceOf(SubtractVxMinusVyOpcode);
    const andOpcode = opcode as SubtractVxMinusVyOpcode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Sub Vx-Vy 8XY7', () => {
    const opcode = OpcodeFactory.build(0x8ab7);
    expect(opcode).toBeInstanceOf(SubtractVyMinusVxOpcode);
    const andOpcode = opcode as SubtractVyMinusVxOpcode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Right shift Vx <= vy 8XY6', () => {
    const opcode = OpcodeFactory.build(0x8ab6);
    expect(opcode).toBeInstanceOf(RightShiftOpcode);
    const andOpcode = opcode as RightShiftOpcode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Left shift Vx <= vy 8XYe', () => {
    const opcode = OpcodeFactory.build(0x8abe);
    expect(opcode).toBeInstanceOf(LeftShiftOpcode);
    const andOpcode = opcode as LeftShiftOpcode;
    expect(andOpcode.registerX).toEqual(0xa);
    expect(andOpcode.registerY).toEqual(0xb);
  });
  it('Skip 9XY0', () => {
    const opcode = OpcodeFactory.build(0x9120);
    expect(opcode).toBeInstanceOf(SkipVxNotEqualVyOpcode);
    const display = opcode as SkipVxNotEqualVyOpcode;
    expect(display.registerX).toEqual(0x1);
    expect(display.registerY).toEqual(0x2);
  });
  
  it('Set index register ANNN', () => {
    const opcode = OpcodeFactory.build(0xa123);
    expect(opcode).toBeInstanceOf(SetIndexRegisterOpcode);
    const indexRegisterOpcode = opcode as SetIndexRegisterOpcode;
    expect(indexRegisterOpcode.value).toEqual(0x123);
  });

  it('Jump with offset BNNN', () => {
    const opcode = OpcodeFactory.build(0xb123);
    expect(opcode).toBeInstanceOf(JumpOffsetOpCode);
    const indexRegisterOpcode = opcode as JumpOffsetOpCode;
    expect(indexRegisterOpcode.value).toEqual(0x123);
  });

  it('Random CXNN', () => {
    const opcode = OpcodeFactory.build(0xc123);
    expect(opcode).toBeInstanceOf(RandomOpcode);
    const indexRegisterOpcode = opcode as RandomOpcode;
    expect(indexRegisterOpcode.registerX).toEqual(0x1);
    expect(indexRegisterOpcode.value).toEqual(0x23);
  });


  it('Display DXYN', () => {
    const opcode = OpcodeFactory.build(0xd123);
    expect(opcode).toBeInstanceOf(DisplayOpcode);
    const display = opcode as DisplayOpcode;
    expect(display.x).toEqual(0x1);
    expect(display.y).toEqual(0x2);
    expect(display.value).toEqual(0x3);
  });

  it('Binary-coded decimal conversion FX33', () => {
    const opcode = OpcodeFactory.build(0xf133);
    expect(opcode).toBeInstanceOf(BinaryDecimalConversionOpcode);
    const display = opcode as BinaryDecimalConversionOpcode;
    expect(display.register).toEqual(0x1);
  });

});

