import React from "react";
import { Clock } from "react-bootstrap-icons";
import { getCharacterSheetData } from "../../data/CharacterSheetData";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";

export const Rest = () => (
  <label
    onClick={() => {
      let rest = prompt('Rest time ("short", "long", "full" or hours)');
      if (rest) {
        rest = rest.trim().toLowerCase();
        let restHours = Number.parseInt(rest, 10);
        if (Number.isNaN(restHours)) {
          switch (rest) {
            case "short":
              restHours = 1;
              break;
            case "long":
              restHours = 8;
              break;
            case "full":
              restHours = 24;
              break;
          }
        } else {
          if (restHours >= 1) {
            if (restHours >= 8) {
              if (restHours >= 24) {
                rest = "full";
              } else {
                rest = "long";
              }
            } else {
              rest = "short";
            }
          }
        }

        const cs = getCharacterSheetData();
        switch (rest) {
          case "short":
            break;
          case "long":
            cs.hitPointsCurrent = Math.min(
              cs.hitPointsMax,
              cs.hitPointsCurrent + Math.floor(cs.hitPointsMax / 2)
            );
            cs.chakraPointsCurrent = Math.min(
              cs.chakraPointsMax,
              cs.chakraPointsCurrent + Math.floor(cs.chakraPointsMax / 2)
            );
            break;
          case "full":
            cs.hitPointsCurrent = cs.hitPointsMax;
            cs.chakraPointsCurrent = cs.chakraPointsMax;
            break;
          default:
            alert(`Invalid rest: "${rest}"`);
            return;
        }

        notifyPropertyChanged();
        alert(`Downtime: ${restHours} hours (${rest})`);
      }
    }}
  >
    <Clock />
    <span>Rest</span>
  </label>
);
