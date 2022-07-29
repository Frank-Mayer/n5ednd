import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class WeaponSpecialist implements IClass {
  public readonly ident = EClass["Scout-Nin"];
  hitDice: Dice = 10;
  chakraDice: Dice = 8;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
