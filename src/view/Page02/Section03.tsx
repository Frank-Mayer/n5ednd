import React from "react";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";

export const Section03 = () => (
  <section className="s03">
    <div>
      <ListView
        index="alliesAndOrganizations"
        add={(arr) => {
          const newItem = prompt("Add ally or organization");
          if (newItem) {
            arr.push(newItem);
          }
        }}
      >
        {({ item, key, setValue }) => {
          return (
            <input
              key={key}
              data-key={key}
              type="text"
              value={item}
              onChange={(ev) => {
                setValue(ev.target.value);
                notifyPropertyChanged();
              }}
            />
          );
        }}
      </ListView>
      <span>Allies &amp; Organizations</span>
    </div>
    <div>
      <ListView
        index="natureAffinities"
        add={(arr) => {
          const newItem = prompt("Add nature affinity");
          if (newItem) {
            arr.push(newItem);
          }
        }}
      >
        {({ item, key, setValue }) => {
          return (
            <input
              key={key}
              data-key={key}
              type="text"
              value={item}
              onChange={(ev) => {
                setValue(ev.target.value);
                notifyPropertyChanged();
              }}
            />
          );
        }}
      </ListView>
      <span>Nature Affinities</span>
    </div>
  </section>
);
