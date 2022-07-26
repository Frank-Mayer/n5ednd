import React from "react";
import { getCharacterSheetData } from "../data/CharacterSheetData";
import type { CharacterSheetModel } from "../model/CharacterSheet";
import {
  notifyPropertyChanged,
  registerComponent,
} from "../notifyPropertyChanged";

type ArrayElType<T> = T extends Array<infer U> ? U : never;

interface Props<
  K extends keyof CharacterSheetModel,
  T extends CharacterSheetModel[K] & Array<ArrayElType<CharacterSheetModel[K]>>
> {
  index: K;
  children: (x: {
    item: ArrayElType<T>;
    key: string;
    setValue: (x: ArrayElType<T>) => void;
  }) => React.ReactNode;
  add?: (arr: T) => void;
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
    dispatch(x);
  });

  if (Array.isArray(val)) {
    return (
      <ul className="ListView">
        {val.map((_, i) => {
          const key = `${props.index}[${i}]`;
          const item = (getCharacterSheetData()[props.index] as T)[i];

          return (
            <li key={key}>
              {props.add ? (
                <button
                  className="remove"
                  title="Remove this item from the list"
                  onClick={() => {
                    (getCharacterSheetData()[props.index] as T).splice(i, 1);
                    notifyPropertyChanged();
                  }}
                >
                  x
                </button>
              ) : (
                <></>
              )}
              {props.children({
                item,
                key,
                setValue: (x: ArrayElType<T>) => {
                  (getCharacterSheetData()[props.index] as T)[i] = x;
                },
              })}
            </li>
          );
        })}
        {props.add ? (
          <li
            className="add"
            title="Add new item to the list"
            onClick={() => {
              props.add!(getCharacterSheetData()[props.index] as T);
              notifyPropertyChanged();
            }}
          >
            Add item
          </li>
        ) : (
          <></>
        )}
      </ul>
    );
  } else {
    return <ul></ul>;
  }
};
