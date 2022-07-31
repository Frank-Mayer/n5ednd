import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Non implements IClan {
  speed: number = 30;
  ident: EClan = EClan["Non-Clan"];
}
