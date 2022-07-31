import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Shoton implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Shoton;
}
