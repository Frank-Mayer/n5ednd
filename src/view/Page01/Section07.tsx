import React from "react";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";

export const Section07 = () => (
  <section className="s07">
    <ListView
      index="featuresTraitsProficiencies"
      add={(arr) => {
        const newItem = prompt("Add Feature/Trait/Proficiency");
        if (newItem) {
          arr.push(newItem);
        }
      }}
    >
      {({ item, key, setValue }) => (
        <input
          key={key}
          type="text"
          value={item}
          onChange={(ev) => {
            setValue(ev.target.value);
            notifyPropertyChanged();
          }}
        />
      )}
    </ListView>
    <label>Features &amp; Traits &amp; Proficiencies</label>
  </section>
);
