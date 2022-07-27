import React from "react";
import { Equipment } from "../../model/Equipment";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";
import { PrimitiveView } from "../PrimitiveView";

export const Section08 = () => (
  <section className="s08">
    <PrimitiveView index="ryo" style="left" />
    <ListView
      index="equipment"
      thead={["Name", "Armor", "Bulk", "Count"]}
      add={(arr) => {
        const newItem = prompt("New Equipment name");
        if (newItem) {
          arr.push(new Equipment({ name: newItem }));
        }
      }}
    >
      {({ item, key }) => (
        <>
          <td>
            <input
              key={key + ".name"}
              value={item.name}
              onChange={(ev) => {
                item.name = ev.target.value;
                notifyPropertyChanged();
              }}
            />
          </td>
          <td>
            <input
              key={key + ".armor"}
              type="number"
              min="0"
              value={item.armor}
              onChange={(ev) => {
                item.armor = Number.parseInt(ev.target.value);
                notifyPropertyChanged();
              }}
            />
          </td>
          <td>
            <input
              key={key + ".bulk"}
              type="number"
              min="0"
              value={item.bulk}
              onChange={(ev) => {
                item.bulk = Number.parseInt(ev.target.value);
                notifyPropertyChanged();
              }}
            />
          </td>
          <td>
            <input
              key={key + ".count"}
              type="number"
              min="1"
              value={item.count}
              onChange={(ev) => {
                item.count = Number.parseInt(ev.target.value);
                notifyPropertyChanged();
              }}
            />
          </td>
        </>
      )}
    </ListView>
  </section>
);
