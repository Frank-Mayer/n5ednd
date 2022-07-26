import React from "react";
import { getCharacterSheetData } from "../data/CharacterSheetData";
import type { CharacterSheetModel } from "../model/CharacterSheet";
import {
  notifyPropertyChanged,
  registerComponent,
} from "../notifyPropertyChanged";
import { camelToHuman } from "./lib/string";

interface Props<K extends keyof CharacterSheetModel> {
  index: K;
  readonly?: boolean;
  label?: string;
}

export const TextView = <
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K]
>(
  props: Props<K>
) => {
  const [val, dispatch] = React.useState<T>(
    getCharacterSheetData()[props.index] as T
  );
  registerComponent(props.index, (x: T) => {
    dispatch(x);
  });

  return (
    <label className="TextView">
      <span>{props.label ?? camelToHuman(props.index)}</span>
      <textarea
        key={props.index}
        value={String(val)}
        readOnly={props.readonly ?? false}
        onChange={(ev) => {
          if (getCharacterSheetData()[props.index] !== ev.target.value) {
            getCharacterSheetData()[props.index] = ev.target.value as T;
            notifyPropertyChanged();
          }
        }}
      />
    </label>
  );
};
