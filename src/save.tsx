import React from "react";
import type { FC } from "react";
import {
  getCharacterSheetData,
  setCharacterSheetData,
} from "./data/CharacterSheetData";
import { EClan } from "./model/Clans/EClan";
import { EClass } from "./model/Classes/EClass";
import { notifyPropertyChanged } from "./notifyPropertyChanged";
import * as lzwCompress from "lzwcompress";

const save = () => {
  const data = getCharacterSheetData();
  const json = JSON.stringify(data);
  const compr = lzwCompress
    .pack(json)
    .map((x) => String.fromCharCode(x))
    .join("");
  const blob = new Blob([compr], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.name} ${EClan[data.clan]} ${EClass[data.class]} Lv${
    data.level
  }.lzw`;
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
      setCharacterSheetData(data);
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

export {};
