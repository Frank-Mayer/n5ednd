import React from "react";
import { Proficiency } from "../../model/Proficiency";
import { notifyPropertyChanged } from "../../notifyPropertyChanged";
import { ListView } from "../ListView";
import { PrimitiveView } from "../PrimitiveView";

export const Section03 = () => (
  <section className="s03">
    <table>
      <tbody>
        <tr>
          <th>
            <PrimitiveView style="big" index="strength" />
            <PrimitiveView style="no-label" index="strengthDice" readonly />
          </th>
          <td>
            <ListView
              index="strengthProficiencies"
              add={(arr) => {
                const newItem = prompt("Add strength Proficiency");
                if (newItem) {
                  arr.push(new Proficiency({ label: newItem }));
                }
              }}
            >
              {({ item, key }) => (
                <>
                  <input
                    key={key + ".p"}
                    type="checkbox"
                    checked={item.p}
                    onChange={(ev) => {
                      item.p = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".h"}
                    type="checkbox"
                    checked={item.h}
                    onChange={(ev) => {
                      item.h = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".e"}
                    type="checkbox"
                    checked={item.e}
                    onChange={(ev) => {
                      item.e = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <span>{item.value}</span>
                  {item.label === "Saving Throw" ? (
                    <b>{item.label}</b>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </>
              )}
            </ListView>
          </td>
        </tr>
        <tr>
          <th>
            <PrimitiveView style="big" index="dexterity" />
            <PrimitiveView style="no-label" index="dexterityDice" readonly />
          </th>
          <td>
            <ListView
              index="dexterityProficiencies"
              add={(arr) => {
                const newItem = prompt("Add dexterity Proficiency");
                if (newItem) {
                  arr.push(new Proficiency({ label: newItem }));
                }
              }}
            >
              {({ item, key }) => (
                <>
                  <input
                    key={key + ".p"}
                    type="checkbox"
                    checked={item.p}
                    onChange={(ev) => {
                      item.p = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".h"}
                    type="checkbox"
                    checked={item.h}
                    onChange={(ev) => {
                      item.h = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".e"}
                    type="checkbox"
                    checked={item.e}
                    onChange={(ev) => {
                      item.e = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <span>{item.value}</span>
                  {item.label === "Saving Throw" ? (
                    <b>{item.label}</b>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </>
              )}
            </ListView>
          </td>
        </tr>
        <tr>
          <th>
            <PrimitiveView style="big" index="constitution" />
            <PrimitiveView style="no-label" index="constitutionDice" readonly />
          </th>
          <td>
            <ListView
              index="constitutionProficiencies"
              add={(arr) => {
                const newItem = prompt("Add constitution Proficiency");
                if (newItem) {
                  arr.push(new Proficiency({ label: newItem }));
                }
              }}
            >
              {({ item, key }) => (
                <>
                  <input
                    key={key + ".p"}
                    type="checkbox"
                    checked={item.p}
                    onChange={(ev) => {
                      item.p = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".h"}
                    type="checkbox"
                    checked={item.h}
                    onChange={(ev) => {
                      item.h = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".e"}
                    type="checkbox"
                    checked={item.e}
                    onChange={(ev) => {
                      item.e = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <span>{item.value}</span>
                  {item.label === "Saving Throw" ? (
                    <b>{item.label}</b>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </>
              )}
            </ListView>
          </td>
        </tr>
        <tr>
          <th>
            <PrimitiveView style="big" index="intelligence" />
            <PrimitiveView style="no-label" index="intelligenceDice" readonly />
          </th>
          <td>
            <ListView
              index="intelligenceProficiencies"
              add={(arr) => {
                const newItem = prompt("Add intelligence Proficiency");
                if (newItem) {
                  arr.push(new Proficiency({ label: newItem }));
                }
              }}
            >
              {({ item, key }) => (
                <>
                  <input
                    key={key + ".p"}
                    type="checkbox"
                    checked={item.p}
                    onChange={(ev) => {
                      item.p = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".h"}
                    type="checkbox"
                    checked={item.h}
                    onChange={(ev) => {
                      item.h = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".e"}
                    type="checkbox"
                    checked={item.e}
                    onChange={(ev) => {
                      item.e = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <span>{item.value}</span>
                  {item.label === "Saving Throw" ? (
                    <b>{item.label}</b>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </>
              )}
            </ListView>
          </td>
        </tr>
        <tr>
          <th>
            <PrimitiveView style="big" index="wisdom" />
            <PrimitiveView style="no-label" index="wisdomDice" readonly />
          </th>
          <td>
            <ListView
              index="wisdomProficiencies"
              add={(arr) => {
                const newItem = prompt("Add wisdom Proficiency");
                if (newItem) {
                  arr.push(new Proficiency({ label: newItem }));
                }
              }}
            >
              {({ item, key }) => (
                <>
                  <input
                    key={key + ".p"}
                    type="checkbox"
                    checked={item.p}
                    onChange={(ev) => {
                      item.p = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".h"}
                    type="checkbox"
                    checked={item.h}
                    onChange={(ev) => {
                      item.h = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".e"}
                    type="checkbox"
                    checked={item.e}
                    onChange={(ev) => {
                      item.e = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <span>{item.value}</span>
                  {item.label === "Saving Throw" ? (
                    <b>{item.label}</b>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </>
              )}
            </ListView>
          </td>
        </tr>
        <tr>
          <th>
            <PrimitiveView style="big" index="charisma" />
            <PrimitiveView style="no-label" index="charismaDice" readonly />
          </th>
          <td>
            <ListView
              index="charismaProficiencies"
              add={(arr) => {
                const newItem = prompt("Add charisma Proficiency");
                if (newItem) {
                  arr.push(new Proficiency({ label: newItem }));
                }
              }}
            >
              {({ item, key }) => (
                <>
                  <input
                    key={key + ".p"}
                    type="checkbox"
                    checked={item.p}
                    onChange={(ev) => {
                      item.p = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".h"}
                    type="checkbox"
                    checked={item.h}
                    onChange={(ev) => {
                      item.h = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <input
                    key={key + ".e"}
                    type="checkbox"
                    checked={item.e}
                    onChange={(ev) => {
                      item.e = ev.target.checked;
                      notifyPropertyChanged();
                    }}
                  />
                  <span>{item.value}</span>
                  {item.label === "Saving Throw" ? (
                    <b>{item.label}</b>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </>
              )}
            </ListView>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);
