import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Kaguya implements IClan {
  speed: number = 35;
  ident: EClan = EClan.Kaguya;
}
