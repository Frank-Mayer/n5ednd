import type { IClass } from "./IClass";
import { EClass } from "./EClass";
import { defaultProficiencyBonus } from "./defaultProficiencyBonus";

export class GenjutsuSpecialist implements IClass {
  public readonly ident = EClass["Genjutsu Specialist"];
  public proficiencyBonus(level: number) {
    return defaultProficiencyBonus(level);
  }
}
