import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export abstract class Opcode0XNN extends Opcode{
  registerX: number
  value: number
  constructor(registerX: number, value: number){
    super()
    this.registerX=registerX
    this.value=value
  }
}
