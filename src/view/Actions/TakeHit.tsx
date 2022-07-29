import React from "react";
import { EmojiDizzy } from "react-bootstrap-icons";
import { getCharacterSheetData } from "../../data/CharacterSheetData";
import { lifeSustainingMeasures } from "../../lib/lifeSustainingMeasures";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";

const lsmMessage =
  "You are very close to dying!\nLife-sustaining measures recommended.";

export const TakeHit = () => (
  <label
    onClick={() => {
      const damageStr = prompt("Damage");
      if (damageStr) {
        const damage = Number.parseInt(damageStr, 10);
        const cs = getCharacterSheetData();
        cs.hitPointsCurrent = Math.max(0, cs.hitPointsCurrent - damage);
        notifyPropertyChanged();
        if (cs.hitPointsCurrent <= 0) {
          alert("You died!");
        } else if (
          cs.hitPointsCurrent <= Math.max(4, Math.ceil(cs.hitPointsMax / 10))
        ) {
          const lsm = lifeSustainingMeasures();
          if (lsm) {
            alert(lsmMessage + `\n${lsm.name}: ${lsm.count} available`);
          } else {
            alert(lsmMessage);
          }
        }
      }
    }}
  >
    <EmojiDizzy />
    <span>Take Hit</span>
  </label>
);
