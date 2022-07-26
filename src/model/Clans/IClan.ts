import { EClan } from "./EClan";

export abstract class IClan {
  speed: number = 30;
  ident: EClan & number = EClan.Uzumaki;
}
