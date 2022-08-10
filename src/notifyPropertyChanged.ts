import type { CharacterSheetModel } from "./model/CharacterSheet";
import { getCharacterSheetData } from "./data/CharacterSheetData";
import { thisUrl, updateChildren } from "./lib/WindowManager";

const dispatchMap = new Map<
  string,
  {
    key: keyof CharacterSheetModel;
    dispatch: React.Dispatch<React.SetStateAction<any>>;
  }
>();

export const notifyPropertyChanged = (skipSave = false) => {
  for (const [, { key, dispatch }] of dispatchMap) {
    const val = getCharacterSheetData()[key];
    if (typeof val === "object") {
      dispatch(JSON.parse(JSON.stringify(val)));
    } else {
      dispatch(val);
    }
  }

  if (!skipSave) {
    window.postMessage({ type: "property-changed" }, thisUrl.origin);
  }
};

(globalThis as any).notifyPropertyChanged = notifyPropertyChanged;

export const registerComponent = (
  key: keyof CharacterSheetModel,
  dispatch: React.Dispatch<React.SetStateAction<any>>,
  keySuffix?: string
) => {
  dispatchMap.set(key + (keySuffix ?? ""), { dispatch, key });
};
