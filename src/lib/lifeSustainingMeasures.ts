import { getCharacterSheetData } from "../data/CharacterSheetData";

export const lifeSustainingMeasures = () => {
  const cs = getCharacterSheetData();
  for (const eq of cs.equipment) {
    const n = eq.name.replace(/\s+/g, "").toLowerCase();
    if (
      n == "bloodpill" ||
      n == "bloodpills" ||
      n == "blutpille" ||
      n == "blutpillen"
    ) {
      return eq;
    }
  }

  return null;
};
