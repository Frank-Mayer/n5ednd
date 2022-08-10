import { thisUrl } from "../lib/WindowManager";

export class StatisticsModel {
  //#region tool methods
  public toJSON(): this {
    return this;
  }
  //#endregion

  public d4Throws: Array<number>;
  public d6Throws: Array<number>;
  public d8Throws: Array<number>;
  public d10Throws: Array<number>;
  public d12Throws: Array<number>;
  public d20Throws: Array<number>;

  constructor(data: Partial<StatisticsModel>) {
    this.d4Throws = data.d4Throws ?? [];
    this.d6Throws = data.d6Throws ?? [];
    this.d8Throws = data.d8Throws ?? [];
    this.d10Throws = data.d10Throws ?? [];
    this.d12Throws = data.d12Throws ?? [];
    this.d20Throws = data.d20Throws ?? [];
  }

  public addThrow(dice: Dice, throwResult: number) {
    switch (dice) {
      case 4:
        this.d4Throws.push(throwResult);
        break;
      case 6:
        this.d6Throws.push(throwResult);
        break;
      case 8:
        this.d8Throws.push(throwResult);
        break;
      case 10:
        this.d10Throws.push(throwResult);
        break;
      case 12:
        this.d12Throws.push(throwResult);
        break;
      case 20:
        this.d20Throws.push(throwResult);
        break;
    }

    window.postMessage({ type: "property-changed" }, thisUrl.origin);
  }
}
