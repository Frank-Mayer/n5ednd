import React from "react";
import { getCharacterSheetData } from "../data/CharacterSheetData";
import type { CharacterSheetModel } from "../model/CharacterSheet";
import {
  registerComponent,
  notifyPropertyChanged,
} from "../notifyPropertyChanged";
import { camelToHuman } from "./lib/string";

interface Props<K extends keyof CharacterSheetModel> {
  index: K;
  readonly?: boolean;
  label?: string;
}

const typeMap = {
  string: (x: any) => (typeof x === "string" ? x : String(x)),
  number: (x: any) => (typeof x === "number" ? x : Number(x)),
  bigint: (x: any) => (typeof x === "bigint" ? x : BigInt(x)),
  boolean: (x: any) => (typeof x === "boolean" ? x : Boolean(x)),
  symbol: (x: any) => (typeof x === "symbol" ? x : Symbol(x)),
  undefined: (_: any) => undefined,
  object: (x: any) => (typeof x === "object" ? x : Object(x)),
  function: (x: any) => (typeof x === "function" ? x : Function(x)),
};

const getInputTypeFor = (value: any) => {
  switch (typeof value) {
    case "bigint":
    case "number":
      return "number";
    case "string":
      return "text";
    case "boolean":
      return "checkbox";
    default:
      return undefined;
  }
};

export const PrimitiveView = <
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K]
>(
  props: Props<K>
) => {
  const [val, dispatch] = React.useState<T>(
    getCharacterSheetData()[props.index] as T
  );
  const t = typeMap[typeof val];

  registerComponent(props.index, (x: T) => {
    dispatch(t(x));
  });

  return (
    <label>
      <span>{props.label ?? camelToHuman(props.index)}</span>
      <input
        key={props.index}
        type={getInputTypeFor(val)}
        value={String(val)}
        readOnly={props.readonly ?? false}
        onChange={(ev) => {
          const newValue = t(ev.target.value);
          if (getCharacterSheetData()[props.index] !== newValue) {
            getCharacterSheetData()[props.index] = newValue;
            notifyPropertyChanged();
          }
        }}
      />
    </label>
  );
};
