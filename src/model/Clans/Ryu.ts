import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Ryu implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Ryu;
}
