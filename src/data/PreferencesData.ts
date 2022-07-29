import { PreferencesModel } from "../model/Preferences";

let preferencesData: PreferencesModel & {
  [key in keyof PreferencesModel]: PreferencesModel[key];
};

export const setPreferencesData = (data: Partial<PreferencesModel>) => {
  preferencesData = new PreferencesModel(data);
};

export const getPreferencesData = (): PreferencesModel & {
  [key in keyof PreferencesModel]: PreferencesModel[key];
} => preferencesData;

(window as any).getPreferencesData = getPreferencesData;

setPreferencesData({});
