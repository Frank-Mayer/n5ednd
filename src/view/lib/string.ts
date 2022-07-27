export const camelToHuman = (camel: string) =>
  camel
    .replace(/([A-Z])/g, (g) => ` ${g[0]}`)
    .replace(/^./, (g) => g[0].toUpperCase());
