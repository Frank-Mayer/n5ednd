import type { CharacterSheetModel } from "./models/CharacterSheet";
import { CharacterSheetData } from "./data/CharacterSheetData";

const dispatchMap = new Map<
  keyof CharacterSheetModel,
  React.Dispatch<React.SetStateAction<any>>
>();

export const notifyPropertyChanged = () => {
  for (const [key, dispatch] of dispatchMap) {
    dispatch(CharacterSheetData[key]);
  }
};

export const registerComponent = (
  key: keyof CharacterSheetModel,
  dispatch: React.Dispatch<React.SetStateAction<any>>
) => {
  dispatchMap.set(key, dispatch);
};
