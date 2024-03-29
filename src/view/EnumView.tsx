import React, { useState } from "react";
import { getCharacterSheetData } from "../data/CharacterSheetData";
import type { CharacterSheetModel } from "../model/CharacterSheet";
import {
  registerComponent,
  notifyPropertyChanged,
} from "../notifyPropertyChanged";
import { camelToHuman } from "./lib/string";

interface Props<K extends keyof CharacterSheetModel> {
  index: K;
  enum: any;
  label?: string;
  readonly?: boolean;
  style: "left" | "right" | "underline" | "big" | "no-label";
}

export const EnumView = <
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K]
>(
  props: Props<K>
) => {
  const [val, dispatch] = useState<number>(
    getCharacterSheetData()[props.index] as number
  );

  registerComponent(props.index, (x: number) => {
    dispatch(x);
  });

  return (
    <label className={"EnumView " + props.style}>
      <span>{props.label ?? camelToHuman(props.index)}</span>
      <select
        key={props.index}
        value={val}
        onChange={(ev) => {
          if (!props.readonly) {
            const newValue = Number(ev.target.value);
            if (newValue !== getCharacterSheetData()[props.index]) {
              getCharacterSheetData()[props.index] = newValue as T;
              notifyPropertyChanged();
            }
          }
        }}
      >
        {Object.keys(props.enum)
          .filter((x) => !isNaN(parseInt(x, 10)))
          .map((key) => {
            return (
              <option key={props.index + key} value={key}>
                {(props.enum as any)[key]}
              </option>
            );
          })}
      </select>
    </label>
  );
};
