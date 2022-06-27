declare module "lzwcompress" {
  function pack(str: string): Array<number>;
  function unpack(str: Array<number>): string;
}
