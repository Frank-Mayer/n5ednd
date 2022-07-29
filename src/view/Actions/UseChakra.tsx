import React from "react";
import { Hurricane } from "react-bootstrap-icons";
import { getCharacterSheetData } from "../../data/CharacterSheetData";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";

export const UseChakra = () => (
  <label
    onClick={() => {
      const cs = getCharacterSheetData();
      const chakraStr = prompt("Chakra to use");
      if (chakraStr) {
        const chakra = Number.parseInt(chakraStr, 10);
        if (cs.chakraPointsCurrent >= chakra || chakra < 0) {
          cs.chakraPointsCurrent = Math.min(
            cs.chakraPointsMax,
            Math.max(0, cs.chakraPointsCurrent - chakra)
          );
          notifyPropertyChanged();
        } else {
          alert("Not enough chakra!");
        }
      }
    }}
  >
    <Hurricane />
    <span>Use Chakra</span>
  </label>
);
