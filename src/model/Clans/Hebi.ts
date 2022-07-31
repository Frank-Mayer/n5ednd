import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Hebi implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Hebi;
}
