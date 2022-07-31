import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Kuru implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Kuru;
}
