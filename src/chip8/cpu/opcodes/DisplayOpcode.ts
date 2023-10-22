import { WIDTH, HEIGHT } from '../../../application/graphics/Display';
import { Cpu } from '../Cpu';
import { Opcode } from './Opcode';

export class DisplayOpcode extends Opcode {
  x: number;
  y: number;
  value: number;
  constructor(x: number, y: number, value: number) {
    super();
    this.x = x;
    this.y = y;
    this.value = value;
  }
  execute(cpu: Cpu): void {
    const vx = cpu.registersV[this.x] % WIDTH
    const vy = cpu.registersV[this.y] % HEIGHT
    cpu.registersV[0xF] = 0

    for(let i=0; i<this.value; i++){
      const y = vy + i
      if(y >= HEIGHT){
        break
      }
      const sprite = cpu.memory.getValue(cpu.registerI + i)
      for (let j=0; j<8; j++){
        const x = vx + j        
        if(x >= WIDTH){
          continue
        }
        const pixel = !!((sprite >> (7 - j)) & 0x1)

        if(pixel && cpu.display.getPixel(x, y)){
          cpu.registersV[0xF] = 1
        }

        cpu.display.setPixel(x, y, pixel)
      }
    }
  }
}
