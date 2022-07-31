import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Nara implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Nara;
}
