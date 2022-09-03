import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class WeaponSpecialist implements IClass {
  public readonly ident = EClass["Weapon Specialist"];
  hitDice: Dice = 10;
  chakraDice: Dice = 8;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
