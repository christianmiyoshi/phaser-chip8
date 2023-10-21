import { FONT } from '../graphics/Font';

export class Memory {
  data: number[];
  SIZE = 4096;

  constructor() {
    this.data = new Array(this.SIZE).fill(0);
  }

  setValue(index: number, value: number) {
    this.data[index] = value & 0xff;
  }
  getValue(index: number) {
    return this.data[index];
  }

  load(position: number, value: number[]) {
    let index = 0;
    while (index < value.length) {
      this.setValue(position + index, value[index]);
      index++;
    }
  }

  loadFont(position: number = 0x200) {
    let index = position;
    for (const font of FONT) {
      this.load(index, font);
      index += font.length;
    }
  }

  print(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      console.log(
        '0x' + i.toString(16) + ': 0x' + this.getValue(i).toString(16),
      );
    }
  }
}
