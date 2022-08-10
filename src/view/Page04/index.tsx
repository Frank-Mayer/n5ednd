import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { getCharacterSheetData } from "../../data/CharacterSheetData";
import { openWindow } from "../../lib/WindowManager";
import { CharacterSheetModel } from "../../model/CharacterSheet";
import { EClan } from "../../model/Clans/EClan";
import { EClass } from "../../model/Classes/EClass";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";

export const Page04 = () => (
  <div className="p04">
    <ListView
      index="familiarSpirits"
      add={(arr) => {
        const newName = prompt("Familiar spirit name", "Gamabunta");
        if (newName) {
          const cs = getCharacterSheetData();
          arr.push(
            new CharacterSheetModel({
              name: newName,
              playerName: cs.playerName,
              _level: cs.level,
              level: cs.level,
              _xp: cs.xp,
              xp: cs.xp,
              class: EClass.FamiliarSpirit,
              clan: EClan["Non-Clan"],
            })
          );
          notifyPropertyChanged();
        }
      }}
    >
      {({ item, index }) => (
        <>
          <input
            value={item.name}
            placeholder="Familiar spirit name"
            onChange={(ev) => {
              item.name = ev.target.value;
              notifyPropertyChanged();
            }}
          />
          <span
            className="button"
            onClick={() => {
              openWindow(["familiarSpirit", index]);
            }}
          >
            <BoxArrowUpRight />
          </span>
        </>
      )}
    </ListView>
  </div>
);
