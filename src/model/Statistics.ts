export class StatisticsModel {
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
}
