import React from "react";
import type { FC } from "react";
import {
  getCharacterSheetData,
  setCharacterSheetData,
} from "./data/CharacterSheetData";
import { getStatisticsData, setStatisticsData } from "./data/StatisticsData";
import { EClan } from "./model/Clans/EClan";
import { EClass } from "./model/Classes/EClass";
import { notifyPropertyChanged } from "./notifyPropertyChanged";
import * as lzwCompress from "lzwcompress";
import { openDB } from "idb";
import { CharacterSheetModel } from "./model/CharacterSheet";

const save = () => {
  const data = {
    characterSheet: getCharacterSheetData(),
    statistics: getStatisticsData(),
  };
  const json = JSON.stringify(data);
  const compr = lzwCompress
    .pack(json)
    .map((x) => String.fromCharCode(x))
    .join("");
  const blob = new Blob([compr], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = [
    data.characterSheet.name,
    EClan[data.characterSheet.clan],
    EClass[data.characterSheet.class],
    `Lv${data.characterSheet.level}.lzw`,
  ].join(" ");
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
};

const onUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
  const file = ev.target.files![0];
  file
    .text()
    .then((text) => {
      const data = JSON.parse(
        lzwCompress.unpack(text.split("").map((x) => x.charCodeAt(0)))
      );
      if (data.characterSheet) {
        setCharacterSheetData(data.characterSheet);
      }
      if (data.statistics) {
        setStatisticsData(data.statistics);
      }
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      notifyPropertyChanged();
    });
};

export const Upload: FC = () => (
  <input type="file" accept=".lzw" multiple={false} onChange={onUpload} />
);

window.addEventListener(
  "keydown",
  (ev) => {
    if (ev.ctrlKey || ev.metaKey) {
      switch (ev.key) {
        case "s":
          save();
          ev.preventDefault();
          ev.stopPropagation();
          break;
      }
    }
  },
  {
    capture: true,
    passive: false,
  }
);

const characterSheetObjectStore = "character-sheet";
const characterSheetKey = "character-sheet";
const statisticsKey = "statistics";

export const dbProm = openDB<CharacterSheetModel>("naruto", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(characterSheetObjectStore)) {
      db.createObjectStore(characterSheetObjectStore);
    }
  },
});

dbProm.then((db) => {
  db.get(characterSheetObjectStore, characterSheetKey)
    .then((data) => {
      if (data) {
        setCharacterSheetData(data);
        notifyPropertyChanged();
      }
    })
    .catch(console.error);

  db.get(characterSheetObjectStore, statisticsKey)
    .then((data) => {
      if (data) {
        setStatisticsData(data);
        notifyPropertyChanged();
      }
    })
    .catch(console.error);

  const saveInterv = window.setInterval(() => {
    db.transaction(characterSheetObjectStore, "readwrite");
    db.put(
      characterSheetObjectStore,
      getCharacterSheetData(),
      characterSheetKey
    )
      .then(() => {
        console.log("sheet saved");
      })
      .catch((err) => {
        window.clearInterval(saveInterv);
        console.error(err);
        alert(err);
      });

    db.put(characterSheetObjectStore, getStatisticsData(), statisticsKey)
      .then(() => {
        console.log("statistics saved");
      })
      .catch((err) => {
        window.clearInterval(saveInterv);
        console.error(err);
        alert(err);
      });
  }, 2000);
});

export {};
