import { CharacterSheetModel } from "../model/CharacterSheet";
import { EClass } from "../model/Classes/EClass";

export const CharacterSheetData: CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
} = new CharacterSheetModel({
  name: "Naruto",
  level: 4,
  class: EClass["Scout-Nin"],
});
