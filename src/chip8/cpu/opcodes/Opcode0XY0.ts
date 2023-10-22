import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export abstract class OpcodeXY0 extends Opcode{
  registerX: number
  registerY: number
  constructor(registerX: number, registerY: number){
    super()
    this.registerX=registerX
    this.registerY=registerY
  }
}
