import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class PuppetMaster implements IClass {
  public readonly ident = EClass["Puppet Master"];
  hitDice: Dice = 8;
  chakraDice: Dice = 10;
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
