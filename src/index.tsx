import React from "react";
import { PrimitiveView } from "./view/PrimitiveView";
import ReactDOM from "react-dom/client";
import { EnumView } from "./view/EnumView";
import { EBackground } from "./model/Backgrounds/EBackground";
import { EClass } from "./model/Classes/EClass";
import { EClan } from "./model/Clans/EClan";
import { Upload } from "./save";
import { ListView } from "./view/ListView";
import { notifyPropertyChanged } from "./notifyPropertyChanged";
import { TextView } from "./view/TextView";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootEl!).render(
  <>
    <Upload />
    <div className="p01">
      <section className="s01">
        <PrimitiveView style="left" index="proficiencyBonus" readonly />
        <PrimitiveView style="left" index="passivePerception" readonly />
        <PrimitiveView style="right" index="passiveInsight" readonly />
        <PrimitiveView style="left" index="willOfFire" readonly />
      </section>
      <section className="s02">
        <PrimitiveView style="underline" index="name" label="Character Name" />
        <EnumView style="underline" enum={EClan} index="clan" />
        <PrimitiveView style="underline" index="playerName" />
        <EnumView style="underline" enum={EClass} index="class" />
        <PrimitiveView style="underline" index="level" />
        <EnumView style="underline" enum={EBackground} index="background" />
        <PrimitiveView style="underline" index="rank" />
        <PrimitiveView style="underline" index="xp" />
      </section>
      <section className="s03">
        <table>
          <tbody>
            <tr>
              <th>
                <PrimitiveView style="big" index="strength" />
                <PrimitiveView style="no-label" index="strengthDice" readonly />
              </th>
              <td>
                <ListView index="strengthProficiencies">
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
                <PrimitiveView
                  style="no-label"
                  index="dexterityDice"
                  readonly
                />
              </th>
              <td>
                <ListView index="dexterityProficiencies">
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
                <PrimitiveView
                  style="no-label"
                  index="constitutionDice"
                  readonly
                />
              </th>
              <td>
                <ListView index="constitutionProficiencies">
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
                <PrimitiveView
                  style="no-label"
                  index="intelligenceDice"
                  readonly
                />
              </th>
              <td>
                <ListView index="intelligenceProficiencies">
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
                <ListView index="wisdomProficiencies">
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
                <ListView index="charismaProficiencies">
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
      <section className="s04">
        <PrimitiveView style="big" index="armorClass" readonly />
        <PrimitiveView style="big" index="initiative" />
        <PrimitiveView style="big" index="speed" />
        <PrimitiveView style="big" index="hitPointsMax" />
        <PrimitiveView style="big" index="chakraPointsMax" />
        <PrimitiveView style="big" index="hitPointsCurrent" readonly />
        <PrimitiveView style="big" index="chakraPointsCurrent" readonly />
        <PrimitiveView style="big" index="hitDie" />
        <PrimitiveView style="big" index="chakraDie" />
      </section>
      <section className="s05">
        <TextView index="personalityTraits" />
        <TextView index="ideals" />
        <TextView index="bonds" />
        <TextView index="flaws" />
      </section>
      <section className="s06">{/* attacks & jutsus */}</section>
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
      <section className="s08">{/* equipment */}</section>
    </div>
  </>
);
