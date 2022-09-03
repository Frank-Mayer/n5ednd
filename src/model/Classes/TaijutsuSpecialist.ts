import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class TaijutsuSpecialist implements IClass {
  public readonly ident = EClass["Taijutsu Specialist"];
  hitDice: Dice = 12;
  chakraDice: Dice = 6;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
