export const camelToHuman = (camel: string) =>
  camel
    .replace(/([A-Z])/g, (g) => ` ${g[0]}`)
    .replace(/^./, (g) => g[0].toUpperCase());

export const formatSigned = (value: number | null): string => {
  if (value === null) {
    return "";
  }

  return value < 0 ? `${value}` : `+${value}`;
};
