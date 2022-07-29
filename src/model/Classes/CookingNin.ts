import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class CookingNin implements IClass {
  public readonly ident = EClass["Intelligence Operative"];
  hitDice: Dice = 10;
  chakraDice: Dice = 8;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
