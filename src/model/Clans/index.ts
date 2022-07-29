import { Aburame } from "./Aburame";
import { Akimichi } from "./Akimichi";
import { Bakuton } from "./Bakuton";
import { EClan } from "./EClan";
import { Fuma } from "./Fuma";
import { Futton } from "./Futton";
import { Hatake } from "./Hatake";
import { Hebi } from "./Hebi";
import { Hoshigaki } from "./Hoshigaki";
import { Hyuga } from "./Hyuga";
import { IClan } from "./IClan";
import { Inuzuka } from "./Inuzuka";
import { Jiton } from "./Jiton";
import { Jugo } from "./Jugo";
import { Kaguya } from "./Kaguya";
import { Kurama } from "./Kurama";
import { Kuru } from "./Kuru";
import { Namikaze } from "./Namikaze";
import { Nara } from "./Nara";
import { Non } from "./Non";
import { Ranton } from "./Ranton";
import { Ryu } from "./Ryu";
import { Sarutobi } from "./Sarutobi";
import { Senju } from "./Senju";
import { Shakuton } from "./Shakuton";
import { Shikigami } from "./Shikigami";
import { Shoton } from "./Shoton";
import { Tsuchigumo } from "./Tsuchigumo";
import { Uchiha } from "./Uchiha";
import { Uzumaki } from "./Uzumaki";
import { Yamanaka } from "./Yamanaka";
import { Yoton } from "./Yoton";
import { Yuki } from "./Yuki";

export const from = (ident: EClan | number | string): new () => IClan => {
  const identNum = Number.parseInt(String(ident), 10);
  if (!Number.isNaN(identNum)) {
    ident = identNum;
  }

  switch (ident) {
    case EClan.Aburame:
    case "Aburame":
      return Aburame;
    case EClan.Akimichi:
    case "Akimichi":
      return Akimichi;
    case EClan.Bakuton:
    case "Bakuton":
      return Bakuton;
    case EClan.Fuma:
    case "Fuma":
      return Fuma;
    case EClan.Futton:
    case "Futton":
      return Futton;
    case EClan.Hatake:
    case "Hatake":
      return Hatake;
    case EClan.Hebi:
    case "Hebi":
      return Hebi;
    case EClan.Hoshigaki:
    case "Hoshigaki":
      return Hoshigaki;
    case EClan.Hyuga:
    case "Hyuga":
      return Hyuga;
    case EClan.Inuzuka:
    case "Inuzuka":
      return Inuzuka;
    case EClan.Jiton:
    case "Jiton":
      return Jiton;
    case EClan.Jugo:
    case "Jugo":
      return Jugo;
    case EClan.Kaguya:
    case "Kaguya":
      return Kaguya;
    case EClan.Kurama:
    case "Kurama":
      return Kurama;
    case EClan.Kuru:
    case "Kuru":
      return Kuru;
    case EClan.Namikaze:
    case "Namikaze":
      return Namikaze;
    case EClan.Nara:
    case "Nara":
      return Nara;
    case EClan["Non-Clan"]:
    case "Non-Clan":
      return Non;
    case EClan.Ranton:
    case "Ranton":
      return Ranton;
    case EClan.Ryu:
    case "Ryu":
      return Ryu;
    case EClan.Sarutobi:
    case "Sarutobi":
      return Sarutobi;
    case EClan.Senju:
    case "Senju":
      return Senju;
    case EClan.Shakuton:
    case "Shakuton":
      return Shakuton;
    case EClan.Shikigami:
    case "Shikigami":
      return Shikigami;
    case EClan.Shoton:
    case "Shoton":
      return Shoton;
    case EClan.Tsuchigumo:
    case "Tsuchigumo":
      return Tsuchigumo;
    case EClan.Uchiha:
    case "Uchiha":
      return Uchiha;
    case EClan.Uzumaki:
    case "Uzumaki":
      return Uzumaki;
    case EClan.Yamanaka:
    case "Yamanaka":
      return Yamanaka;
    case EClan.Yoton:
    case "Yoton":
      return Yoton;
    case EClan.Yuki:
    case "Yuki":
      return Yuki;
    default:
      throw new Error(`Unknown class: <${typeof ident}>${ident}`);
  }
};
