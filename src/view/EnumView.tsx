import React, { useState } from "react";
import { CharacterSheetData } from "../data/CharacterSheetData";
import type { CharacterSheetModel } from "../model/CharacterSheet";
import {
  registerComponent,
  notifyPropertyChanged,
} from "../notifyPropertyChanged";

interface Props<K extends keyof CharacterSheetModel> {
  index: K;
  enum: any;
}

export const EnumView = <
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K]
>(
  props: Props<K>
) => {
  const [val, dispatch] = useState<number>(
    CharacterSheetData[props.index] as number
  );

  registerComponent(props.index, (x: number) => {
    dispatch(x);
  });

  return (
    <select
      key={props.index}
      value={val}
      onChange={(ev) => {
        CharacterSheetData[props.index] = ev.target.value as T;
        notifyPropertyChanged();
      }}
    >
      {Object.keys(props.enum)
        .filter((x) => !isNaN(parseInt(x)))
        .map((key) => {
          return (
            <option key={props.index + key} value={key}>
              {(props.enum as any)[key]}
            </option>
          );
        })}
    </select>
  );
};
