import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Jiton implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Jiton;
}
