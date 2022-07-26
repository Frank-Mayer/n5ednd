import React from "react";
import { getCharacterSheetData } from "../data/CharacterSheetData";
import type { CharacterSheetModel } from "../model/CharacterSheet";
import { registerComponent } from "../notifyPropertyChanged";

type ArrayElType<T> = T extends Array<infer U> ? U : never;

interface Props<
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K] & Array<ArrayElType<CharacterSheetModel[K]>>
> {
  index: K;
  addable?: boolean;
  children: (x: { item: ArrayElType<T>; key: string }) => React.ReactNode;
}

export const ListView = <
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K] & Array<ArrayElType<CharacterSheetModel[K]>>
>(
  props: Props<K, T>
) => {
  const [val, dispatch] = React.useState<T>(
    getCharacterSheetData()[props.index] as T
  );
  registerComponent(props.index, (x: T) => {
    console.debug(props.index, x, val, x !== val);

    dispatch(x);
  });

  if (Array.isArray(val)) {
    console.debug("ListView render", val);
    return (
      <ul>
        {val.map((_, i) => {
          const key = `${props.index}[${i}]`;
          const item = (getCharacterSheetData()[props.index] as T)[i];

          return (
            <li key={key}>
              {props.children({
                item,
                key,
              })}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <ul></ul>;
  }
};
