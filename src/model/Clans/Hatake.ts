import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Hatake implements IClan {
  speed: number = 35;
  ident: EClan = EClan.Hatake;
}
