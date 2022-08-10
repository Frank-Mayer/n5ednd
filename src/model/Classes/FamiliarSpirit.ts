import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class FamiliarSpirit implements IClass {
  public readonly ident = EClass.FamiliarSpirit;
  hitDice: Dice = 10;
  chakraDice: Dice = 10;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
