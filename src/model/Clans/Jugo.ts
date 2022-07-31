import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Jugo implements IClan {
  speed: number = 35;
  ident: EClan = EClan.Jugo;
}
