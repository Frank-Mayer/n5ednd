import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Yoton implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Yoton;
}
