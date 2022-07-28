declare class CompressionStream extends GenericTransformStream {
  writable: WritableStream;
  readable: ReadableStream;

  constructor(algorithm: string);
}

declare class DecompressionStream extends GenericTransformStream {
  writable: WritableStream;
  readable: ReadableStream;

  constructor(algorithm: string);
}
