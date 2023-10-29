import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export abstract class Opcode0NNN extends Opcode{
  value: number
  constructor(value: number){
    super()
    this.value=value
  }
}
