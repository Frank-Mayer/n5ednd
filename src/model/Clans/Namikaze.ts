import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Namikaze extends IClan {
  override speed: number = 35;
  override ident: EClan = EClan.Namikaze;
}
