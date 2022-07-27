export class Equipment {
  public name: string;
  public armor: number;
  public bulk: number;
  public count: number;

  public constructor(data: Partial<Equipment>) {
    this.name = data.name ?? "Item";
    this.armor = data.armor ?? 0;
    this.bulk = data.bulk ?? 0;
    this.count = data.count ?? 1;
  }
}
