import { EClan } from "./EClan";
import { IClan } from "./IClan";

export class Shikigami implements IClan {
  speed: number = 30;
  ident: EClan = EClan.Shikigami;
}
