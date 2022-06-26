import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class ScoutNin implements IClass {
  public readonly ident = EClass["Scout-Nin"];
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
