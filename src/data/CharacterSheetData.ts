import { thisUrl } from "../lib/WindowManager";
import { CharacterSheetModel } from "../model/CharacterSheet";

let characterSheetData: CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
};

export const setCharacterSheetData = (data: Partial<CharacterSheetModel>) => {
  characterSheetData = new CharacterSheetModel(data);
};

export const getCharacterSheetData = (
  realValue = false
): CharacterSheetModel & {
  [key in keyof CharacterSheetModel]: CharacterSheetModel[key];
} => {
  if (realValue) {
    return characterSheetData;
  } else {
    const fsIndex = Number.parseInt(
      thisUrl.searchParams.get("familiarSpirit") ?? "",
      10
    );
    if (!Number.isNaN(fsIndex)) {
      const cs = characterSheetData.familiarSpirits[fsIndex];
      if (cs) {
        return cs;
      } else {
        return characterSheetData;
      }
    } else {
      return characterSheetData;
    }
  }
};

(window as any).getCharacterSheetData = getCharacterSheetData;

setCharacterSheetData({});
