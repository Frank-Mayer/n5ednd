import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Kaguya extends IClan {
  override speed: number = 35;
  override ident: EClan = EClan.Kaguya;
}
