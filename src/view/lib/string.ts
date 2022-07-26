export const camelToHuman = (camel: string) =>
  camel
    .replace(/([A-Z])/g, (g) => ` ${g[0]}`)
    .replace(/^./, (g) => g[0].toUpperCase());

export class StringWrapper {
  constructor(private _value: string) {}

  get value() {
    return this._value;
  }

  set value(x: string) {
    this._value = x;
  }
}
