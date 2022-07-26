import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Jugo extends IClan {
  override speed: number = 35;
  override ident: EClan = EClan.Jugo;
}
