import { EClass } from "./EClass";
import type { IClass } from "./IClass";
import { GenjutsuSpecialist } from "./GenjutsuSpecialist";
import { HunterNin } from "./HunterNin";
import { ScoutNin } from "./ScoutNin";

export const from = (ident: EClass | number | string): new () => IClass => {
  const identNum = parseInt(String(ident));
  if (!isNaN(identNum)) {
    ident = identNum;
  }

  switch (ident) {
    case EClass["Genjutsu Specialist"]:
    case "Genjutsu Specialist":
      return GenjutsuSpecialist;
    case EClass["Hunter-Nin"]:
    case "Hunter-Nin":
      return HunterNin;
    case EClass["Scout-Nin"]:
    case "Scout-Nin":
      return ScoutNin;
    default:
      throw new Error(`Unknown class: <${typeof ident}>${ident}`);
  }
};
