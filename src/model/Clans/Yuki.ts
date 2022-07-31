import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Yuki implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Yuki;
}
