export class FamiliarSpirit {
  public name: string;

  public constructor(data: Partial<FamiliarSpirit>) {
    this.name = data.name ?? "Nameless";
  }
}
