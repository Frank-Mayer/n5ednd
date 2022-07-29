import { EClass } from "./EClass";

export interface IClass {
  ident: EClass & number;
  hitDice: Dice;
  chakraDice: Dice;
  proficiencyBonus: (level: number) => number;
}
