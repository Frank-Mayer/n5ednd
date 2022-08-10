import type { CharacterSheetModel } from "./model/CharacterSheet";
import { getCharacterSheetData } from "./data/CharacterSheetData";
import { thisUrl } from "./lib/WindowManager";

const dispatchMap = new Map<
  string,
  {
    key: keyof CharacterSheetModel;
    dispatch: React.Dispatch<React.SetStateAction<any>>;
  }
>();

export const notifyPropertyChanged = () => {
  for (const [, { key, dispatch }] of dispatchMap) {
    const val = getCharacterSheetData()[key];
    if (typeof val === "object") {
      dispatch(JSON.parse(JSON.stringify(val)));
    } else {
      dispatch(val);
    }
  }

  window.postMessage({ type: "property-changed" }, thisUrl.origin);
};

export const registerComponent = (
  key: keyof CharacterSheetModel,
  dispatch: React.Dispatch<React.SetStateAction<any>>,
  keySuffix?: string
) => {
  dispatchMap.set(key + (keySuffix ?? ""), { dispatch, key });
};
