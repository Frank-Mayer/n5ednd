import { EClass } from "./EClass";

export interface IClass {
  ident: EClass & number;
  proficiencyBonus: (level: number) => number;
}
