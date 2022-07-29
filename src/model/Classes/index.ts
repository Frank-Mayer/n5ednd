import { EClass } from "./EClass";
import type { IClass } from "./IClass";
import { GenjutsuSpecialist } from "./GenjutsuSpecialist";
import { HunterNin } from "./HunterNin";
import { ScoutNin } from "./ScoutNin";
import { CookingNin } from "./CookingNin";
import { IntelligenceOperative } from "./IntelligenceOperative";
import { MedicalNin } from "./MedicalNin";
import { NinjutsuSpecialist } from "./NinjutsuSpecialist";
import { PuppetMaster } from "./PuppetMaster";
import { ScienceNin } from "./ScienceNin";
import { TaijutsuSpecialist } from "./TaijutsuSpecialist";
import { WeaponSpecialist } from "./WeaponSpecialist";

export const from = (ident: EClass | number | string): new () => IClass => {
  const identNum = Number.parseInt(String(ident), 10);
  if (!Number.isNaN(identNum)) {
    ident = identNum;
  }

  switch (ident) {
    case EClass["Cooking-Nin"]:
    case "Cooking-Nin":
      return CookingNin;
    case EClass["Genjutsu Specialist"]:
    case "Genjutsu Specialist":
      return GenjutsuSpecialist;
    case EClass["Hunter-Nin"]:
    case "Hunter-Nin":
      return HunterNin;
    case EClass["Intelligence Operative"]:
    case "Intelligence Operative":
      return IntelligenceOperative;
    case EClass["Medical-Nin"]:
    case "Medical-Nin":
      return MedicalNin;
    case EClass["Ninjustu Specialist"]:
    case "Ninjustu Specialist":
      return NinjutsuSpecialist;
    case EClass["Puppet Master"]:
    case "Puppet Master":
      return PuppetMaster;
    case EClass["Science-Nin"]:
    case "Science-Nin":
      return ScienceNin;
    case EClass["Scout-Nin"]:
    case "Scout-Nin":
      return ScoutNin;
    case EClass["Taijutsu Specialist"]:
    case "Taijutsu Specialist":
      return TaijutsuSpecialist;
    case EClass["Weapon Specialist"]:
    case "Weapon Specialist":
      return WeaponSpecialist;
    default:
      throw new Error(`Unknown class: <${typeof ident}>${ident}`);
  }
};
