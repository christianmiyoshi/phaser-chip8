import * as fs from 'fs';

export const read_file = (name: string) => {
  const readstrem = fs.readFileSync(name, null);
  const byteArray = new Uint8Array(readstrem);

  return byteArray;
};
