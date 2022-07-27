import { CharacterSheetModel } from "../model/CharacterSheet";

let characterSheetData: CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
};

export const setCharacterSheetData = (data: Partial<CharacterSheetModel>) => {
  characterSheetData = new CharacterSheetModel(data);
};

export const getCharacterSheetData = (): CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
} => characterSheetData;

(window as any).getCharacterSheetData = getCharacterSheetData;

setCharacterSheetData({});
