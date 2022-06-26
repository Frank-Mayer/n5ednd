import { EClass } from "./Classes/EClass";
import type { IClass } from "./Classes/IClass";
import * as Classes from "./Classes/index";

export class CharacterSheetModel {
  public readonly characterClass: IClass;

  public name: string;

  public level: number;

  public get proficiencyBonus() {
    return this.characterClass.proficiencyBonus(this.level);
  }

  constructor(data: { name: string; characterClass: EClass; level: number }) {
    this.name = data.name ?? "Naruto";
    this.level = data.level ?? 1;
    this.characterClass = new (Classes.from(data.characterClass))();
  }
}
