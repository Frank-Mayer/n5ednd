import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class ScienceNin implements IClass {
  public readonly ident = EClass["Scout-Nin"];
  hitDice: Dice = 8;
  chakraDice: Dice = 10;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
