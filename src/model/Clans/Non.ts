import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Non extends IClan {
  override ident: EClan = EClan["Non-Clan"];
}
