import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Ranton implements IClan {
  speed: number = 35;
  ident: EClan = EClan.Ranton;
}
