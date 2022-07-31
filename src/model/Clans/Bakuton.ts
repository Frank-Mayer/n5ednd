import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Bakuton implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Bakuton;
}
