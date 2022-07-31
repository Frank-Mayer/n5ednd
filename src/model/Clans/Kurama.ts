import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Kurama implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Kurama;
}
