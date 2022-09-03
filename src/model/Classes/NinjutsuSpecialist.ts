import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class NinjutsuSpecialist implements IClass {
  public readonly ident = EClass["Ninjustu Specialist"];
  hitDice: Dice = 6;
  chakraDice: Dice = 12;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
