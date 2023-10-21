export const HEIGHT = 32;
export const WIDTH = 64;

export class Display implements DisplayInterface {
  data: boolean[][];
  HEIGHT = HEIGHT;
  WIDTH = WIDTH;

  constructor() {
    this.data = Array.from(Array(this.WIDTH), () => new Array(this.HEIGHT));
  }

  getPixel(x: number, y: number) {
    return this.data[x][y];
  }

  setPixel(x: number, y: number, value: boolean) {
    this.data[x][y] = value;
  }

  clear(): void {
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        this.setPixel(i, j, false);
      }
    }
  }
}
