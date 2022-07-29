import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class IntelligenceOperative implements IClass {
  public readonly ident = EClass["Intelligence Operative"];
  hitDice: Dice = 8;
  chakraDice: Dice = 10;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
