import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Futton implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Futton;
}
