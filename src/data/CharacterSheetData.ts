import { CharacterSheetModel } from "../models/CharacterSheet";
import { EClass } from "../models/Classes/EClass";

export const CharacterSheetData: CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
} = new CharacterSheetModel({
  name: "Yorunokijin",
  level: 4,
  characterClass: EClass["Hunter-Nin"],
});
