import { EClass } from "./EClass";
import type { IClass } from "./IClass";
import { GenjutsuSpecialist } from "./GenjutsuSpecialist";
import { HunterNin } from "./HunterNin";

export const from = (ident: EClass): new () => IClass => {
  switch (ident) {
    case EClass["Genjutsu Specialist"]:
      return GenjutsuSpecialist;
    case EClass["Hunter-Nin"]:
      return HunterNin;
    default:
      throw new Error(`Unknown class: ${ident}`);
  }
};
