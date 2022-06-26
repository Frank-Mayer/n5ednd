import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class HunterNin implements IClass {
  public readonly ident = EClass["Hunter-Nin"];
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
