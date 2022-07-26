import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Hatake extends IClan {
  override speed: number = 35;
  override ident: EClan = EClan.Hatake;
}
