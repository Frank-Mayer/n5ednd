export class Item {
  name: string;
  public userChakra: number;
  public userHealth: number;
  public targetChakra: number;
  public targetHealth: number;

  constructor(data: Partial<Item>) {
    this.name = data.name ?? "Item";
    this.userChakra = data.userChakra ?? 0;
    this.userHealth = data.userHealth ?? 0;
    this.targetChakra = data.targetChakra ?? 0;
    this.targetHealth = data.targetHealth ?? 0;
  }
}
