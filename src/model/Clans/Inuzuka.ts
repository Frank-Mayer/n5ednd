import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Inuzuka extends IClan {
  override speed: number = 35;
  override ident: EClan = EClan.Inuzuka;
}