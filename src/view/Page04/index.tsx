import React from "react";
import { FamiliarSpirit } from "../../model/FamiliarSpirit";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";

export const Page04 = () => {
  return (
    <div className="p04">
      <section className="s01">
        <ListView
          index="familiarSpirits"
          add={(arr) => {
            const newName = prompt("Enter a name");
            if (newName) {
              arr.push(
                new FamiliarSpirit({
                  name: newName,
                })
              );
            }
          }}
        >
          {({ item }) => (
            <>
              <label>
                <span>Name</span>
                <input
                  value={item.name}
                  onChange={(ev) => {
                    item.name = ev.target.value;
                    notifyPropertyChanged();
                  }}
                />
              </label>
            </>
          )}
        </ListView>
      </section>
    </div>
  );
};
