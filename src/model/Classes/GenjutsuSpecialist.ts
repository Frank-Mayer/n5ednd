import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class GenjutsuSpecialist implements IClass {
  public readonly ident = EClass["Genjutsu Specialist"];
  hitDice: Dice = 6;
  chakraDice: Dice = 12;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
