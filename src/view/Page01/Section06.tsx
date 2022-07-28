import React from "react";
import { Item } from "../../model/Item";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import NumericInput from "react-numeric-input";
import { ListView } from "../ListView";
import { client } from "@frank-mayer/magic";

export const Section06 = () => (
  <section className="s06">
    <ListView
      index="usableItems"
      thead={["Name", "P CH", "P HP", "T CH", "T HP"]}
      add={(arr) => {
        const newItem = prompt("Add new usable item");
        if (newItem) {
          arr.push(new Item({ name: newItem }));
        }
      }}
    >
      {({ item, key }) => (
        <>
          <td>
            <input
              key={key + ".name"}
              type="text"
              value={item.name}
              onChange={(ev) => {
                item.name = ev.target.value;
                notifyPropertyChanged();
              }}
            />
          </td>
          <td>
            <NumericInput
              key={key + ".userChakra"}
              type="number"
              step={1}
              mobile={client.isMobile}
              value={item.userChakra}
              onChange={(newValue) => {
                if (newValue) {
                  item.userChakra = newValue;
                  notifyPropertyChanged();
                }
              }}
            />
          </td>
          <td>
            <NumericInput
              key={key + ".userHealth"}
              type="number"
              step={1}
              mobile={client.isMobile}
              value={item.userHealth}
              onChange={(newValue) => {
                if (newValue) {
                  item.userHealth = newValue;
                  notifyPropertyChanged();
                }
              }}
            />
          </td>
          <td>
            <NumericInput
              key={key + ".targetChakra"}
              type="number"
              step={1}
              mobile={client.isMobile}
              value={item.targetChakra}
              onChange={(newValue) => {
                if (newValue) {
                  item.targetChakra = newValue;
                  notifyPropertyChanged();
                }
              }}
            />
          </td>
          <td>
            <NumericInput
              key={key + ".targetHealth"}
              type="number"
              step={1}
              mobile={client.isMobile}
              value={item.targetHealth}
              onChange={(newValue) => {
                if (newValue) {
                  item.targetHealth = newValue;
                  notifyPropertyChanged();
                }
              }}
            />
          </td>
        </>
      )}
    </ListView>
  </section>
);
