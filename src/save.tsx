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

import { openDB } from "idb";
import { CharacterSheetModel } from "./model/CharacterSheet";
import {
  BoxArrowDown,
  BoxArrowInDown,
  Check2,
  Exclamation,
} from "react-bootstrap-icons";
import { compress, compressionSupported, decompress } from "./lib/compress";
import { StatisticsModel } from "./model/Statistics";
import {
  isSubwindow,
  messageToParent,
  onMessageFromChildren,
  Signal,
  subwindowDataForUpdateParent,
  updateChildren,
} from "./lib/WindowManager";

let savedStateDispatch:
  | React.Dispatch<React.SetStateAction<boolean>>
  | undefined = undefined;

let setSavedStatus = (saved: boolean) => {
  if (savedStateDispatch) {
    savedStateDispatch(saved);
  }
};

export const SavedStatus = () => {
  const [val, dispatch] = React.useState<boolean>(true);

  savedStateDispatch = dispatch;

  return (
    <label className="no-click">
      {val ? <Check2 /> : <Exclamation />}
      <span>{val ? <>Saved</> : <>Saving...</>}</span>
    </label>
  );
};

const save = async () => {
  const data = {
    characterSheet: getCharacterSheetData().toJSON(),
    statistics: getStatisticsData().toJSON(),
  };
  const { blob, ext } = await compress(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = [
    data.characterSheet.name,
    EClan[data.characterSheet.clan],
    EClass[data.characterSheet.class],
    `Lv${data.characterSheet._level}.${ext}`,
  ].join(" ");
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
};

const onUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
  const file = ev.target.files![0];
  decompress<{
    characterSheet: CharacterSheetModel;
    statistics: StatisticsModel;
  }>(file, file.name.split(".").pop() ?? "")
    .then((data) => {
      if (data.characterSheet) {
        setCharacterSheetData(data.characterSheet);
      }
      if (data.statistics) {
        setStatisticsData(data.statistics);
      }

      if (data.characterSheet && data.statistics) {
        notifyPropertyChanged();
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
      accept={compressionSupported ? ".gz,.json" : ".json"}
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
  const loadDataFromDb = () => {
    db.get(characterSheetObjectStore, characterSheetKey)
      .then((data) => {
        if (data) {
          setCharacterSheetData(data);
          notifyPropertyChanged(true);
        }
      })
      .catch(console.error);

    db.get(characterSheetObjectStore, statisticsKey)
      .then((data) => {
        if (data) {
          setStatisticsData(data);
          notifyPropertyChanged(true);
        }
      })
      .catch(console.error);
  };

  loadDataFromDb();

  let storeTimeout: number | undefined;

  window.addEventListener(
    "message",
    (ev) => {
      if (ev.data.type === "property-changed") {
        setSavedStatus(false);

        if (isSubwindow) {
          messageToParent({
            data: {
              type: "property-changed",
              ...subwindowDataForUpdateParent,
              data: getCharacterSheetData().toJSON(),
            },
          }).then((x) => {
            if (x) {
              setSavedStatus(true);
            } else {
              alert(x);
            }
          });
        } else {
          if (typeof storeTimeout !== "undefined") {
            clearTimeout(storeTimeout);
            storeTimeout = undefined;
          }

          storeTimeout = window.setTimeout(() => {
            storeTimeout = undefined;
            db.transaction(characterSheetObjectStore, "readwrite");
            Promise.all([
              db
                .put(
                  characterSheetObjectStore,
                  getCharacterSheetData(true).toJSON(),
                  characterSheetKey
                )
                .then(() => {
                  setSavedStatus(true);
                })
                .catch((err) => {
                  console.error(err);
                  alert(err);
                }),

              db
                .put(
                  characterSheetObjectStore,
                  getStatisticsData().toJSON(),
                  statisticsKey
                )
                .catch((err) => {
                  console.error(err);
                  alert(err);
                }),
            ]).then(() => {
              updateChildren();
            });
          }, 3000);
        }
      } else if (ev.data.type === "property-changed-from-parent") {
        loadDataFromDb();
      }
    },
    { passive: true }
  );

  onMessageFromChildren((msg) => {
    if (
      msg.type === "property-changed" &&
      typeof msg.index == "number" &&
      msg.prop &&
      msg.data
    ) {
      (getCharacterSheetData() as any)[msg.prop][msg.index] =
        new CharacterSheetModel(msg.data);
      notifyPropertyChanged();
      return Signal.on("ok");
    }
    return Signal.off();
  });
});

export {};
