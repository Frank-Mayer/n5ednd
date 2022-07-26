import type { CharacterSheetModel } from "./model/CharacterSheet";
import { getCharacterSheetData } from "./data/CharacterSheetData";

const dispatchMap = new Map<
  keyof CharacterSheetModel,
  React.Dispatch<React.SetStateAction<any>>
>();

export const notifyPropertyChanged = () => {
  for (const [key, dispatch] of dispatchMap) {
    const val = getCharacterSheetData()[key];
    if (typeof val === "object") {
      dispatch(JSON.parse(JSON.stringify(val)));
    } else {
      dispatch(val);
    }
  }
};

export const registerComponent = (
  key: keyof CharacterSheetModel,
  dispatch: React.Dispatch<React.SetStateAction<any>>
) => {
  dispatchMap.set(key, dispatch);
};
