import { CharacterSheetModel } from "../model/CharacterSheet";

let characterSheetData: CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
};

export const setCharacterSheetData = (data: Partial<CharacterSheetModel>) => {
  console.debug("setCharacterSheetData", data);
  characterSheetData = new CharacterSheetModel(data);
};

export const getCharacterSheetData = (): CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
} => characterSheetData;

setCharacterSheetData({});
