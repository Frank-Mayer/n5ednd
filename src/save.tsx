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
import { BoxArrowDown, BoxArrowInDown } from "react-bootstrap-icons";

const save = () => {
  const data = {
    characterSheet: getCharacterSheetData().toJSON(),
    statistics: getStatisticsData().toJSON(),
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
  <label>
    <BoxArrowInDown />
    <span>Upload</span>
    <input
      style={{
        display: "none",
        visibility: "collapse",
      }}
      type="file"
      accept=".lzw"
      multiple={false}
      onChange={onUpload}
    />
  </label>
);

export const Download: FC = () => (
  <label onClick={save}>
    <BoxArrowDown />
    <span>Download</span>
  </label>
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

  let storeTimeout: number | undefined;

  window.addEventListener(
    "message",
    (ev) => {
      if (ev.data.type === "property-changed") {
        if (typeof storeTimeout !== "undefined") {
          clearTimeout(storeTimeout);
          storeTimeout = undefined;
        }

        storeTimeout = window.setTimeout(() => {
          storeTimeout = undefined;
          db.transaction(characterSheetObjectStore, "readwrite");
          db.put(
            characterSheetObjectStore,
            getCharacterSheetData().toJSON(),
            characterSheetKey
          ).catch((err) => {
            console.error(err);
            alert(err);
          });

          db.put(
            characterSheetObjectStore,
            getStatisticsData().toJSON(),
            statisticsKey
          ).catch((err) => {
            console.error(err);
            alert(err);
          });
        }, 3000);
      }
    },
    { passive: true }
  );
});

export {};
