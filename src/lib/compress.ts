export const compressionSupported =
  "CompressionStream" in window &&
  "DecompressionStream" in window &&
  "TextEncoder" in window &&
  "TextDecoder" in window;

const textEncoder = compressionSupported ? new TextEncoder() : undefined;
const textDecoder = compressionSupported ? new TextDecoder() : undefined;

const readStream = compressionSupported
  ? async (rs: ReadableStream) => {
      const output = [];
      const reader = rs.getReader();
      let totalSize = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        output.push(value);
        totalSize += value.byteLength;
      }
      const concatenated = new Uint8Array(totalSize);
      let offset = 0;
      for (const array of output) {
        concatenated.set(array, offset);
        offset += array.byteLength;
      }
      return concatenated;
    }
  : undefined;

export const compress = async (data: object) => {
  if (compressionSupported) {
    const cs = new CompressionStream("gzip");
    const writer = cs.writable.getWriter();
    writer.write(textEncoder!.encode(JSON.stringify(data)));
    writer.close();

    const compressed = await readStream!(cs.readable);

    return {
      blob: new Blob([compressed], { type: "application/gzip" }),
      ext: "json.gz",
    };
  } else {
    return {
      blob: new Blob([JSON.stringify(data)], { type: "application/json" }),
      ext: "json",
    };
  }
};

export const decompress = async <T extends object = object>(
  file: File,
  ext: string
): Promise<T> => {
  if (ext === "gz") {
    if (compressionSupported) {
      const ds = new DecompressionStream("gzip");
      const writer = ds.writable.getWriter();
      writer.write(await file.arrayBuffer());
      writer.close();

      const decompressed = await readStream!(ds.readable);
      return JSON.parse(textDecoder!.decode(decompressed));
    } else {
      throw new Error("Compression API not supported");
    }
  } else if (ext === "json") {
    return JSON.parse(await file.text());
  } else {
    throw new Error(`Unsupported file type "${ext}"`);
  }
};
