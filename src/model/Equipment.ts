export class Equipment {
  public name: string;
  public armor: number;

  public constructor(data: Partial<Equipment>) {
    this.name = data.name ?? "Item";
    this.armor = data.armor ?? 0;
  }
}
