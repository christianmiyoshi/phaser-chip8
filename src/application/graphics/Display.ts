class Display implements DisplayInterface {
  data: boolean[][];
  HEIGHT = 32;
  WIDTH = 64;

  constructor() {
    this.data = Array.from(Array(this.WIDTH), () => new Array(this.HEIGHT));
  }

  getPixel(x: number, y: number) {
    return this.data[x][y];
  }

  setPixel(x: number, y: number, value: boolean) {
    this.data[x][y] = value;
  }
}
