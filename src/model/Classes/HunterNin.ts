import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class HunterNin implements IClass {
  public readonly ident = EClass["Hunter-Nin"];
  hitDice: Dice = 10;
  chakraDice: Dice = 8;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
