import React from "react";
import NumericInput from "react-numeric-input";
import { Jutsu } from "../../model/Jutsu";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";

export const Section02 = () => (
  <section className="s02">
    <ListView
      index="jutsuList"
      add={(arr) => {
        const name = prompt("Name of the Jutsu");
        if (name === null) return;

        const chakraCost = Number.parseInt(prompt("Chakra Cost") ?? "");
        if (Number.isNaN(chakraCost)) return;

        const description = prompt("Description of the Jutsu");
        if (description === null) return;

        arr.push(new Jutsu(new Jutsu({ name, description, chakraCost })));
      }}
    >
      {({ item, key }) => (
        <>
          <label className="name">
            <span>Name:</span>
            <input
              key={key + ".name"}
              type="text"
              value={item.name}
              onChange={(ev) => {
                item.name = ev.target.value;
                notifyPropertyChanged();
              }}
            />
          </label>
          <select
            key={key + ".rank"}
            value={item.rank}
            onChange={(ev) => {
              item.rank = ev.target.value;
              notifyPropertyChanged();
            }}
          >
            <optgroup label="Jutsu Rank">
              <option value="E">E-Rank</option>
              <option value="D">D-Rank</option>
              <option value="C">C-Rank</option>
              <option value="B">B-Rank</option>
              <option value="A">A-Rank</option>
              <option value="S">S-Rank</option>
            </optgroup>
          </select>
          <label className="chakraCost">
            <span>Chakra Cost:</span>
            <NumericInput
              key={key + ".chakraCost"}
              value={item.chakraCost}
              onChange={(value) => {
                if (value) {
                  item.chakraCost = value;
                  notifyPropertyChanged();
                }
              }}
            />
          </label>
          <textarea
            key={key + ".description"}
            placeholder="Description"
            value={item.description}
            onChange={(ev) => {
              item.description = ev.target.value;
              notifyPropertyChanged();
            }}
          />
        </>
      )}
    </ListView>
    <span>Jutsus Known</span>
  </section>
);
