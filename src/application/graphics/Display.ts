export const HEIGHT = 32;
export const WIDTH = 64;

export class Display implements DisplayInterface {
  data: boolean[][];
  HEIGHT = HEIGHT;
  WIDTH = WIDTH;

  constructor() {
    this.data = Array.from(Array(this.WIDTH), () => new Array(this.HEIGHT));
    this.clear()
  }

  getX(x: number){
    return x % this.WIDTH
  }
  getY(y: number){
    return y % this.HEIGHT
  }

  getPixel(x: number, y: number) {
    return this.data[this.getX(x)][this.getY(y)];
  }

  setPixel(x: number, y: number, value: boolean) {
    this.data[this.getX(x)][this.getY(y)] = value;
  }

  clear(): void {
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        this.setPixel(i, j, false);
      }
    }
  }
}
