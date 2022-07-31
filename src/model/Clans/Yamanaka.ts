import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Yamanaka implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Yamanaka;
}
