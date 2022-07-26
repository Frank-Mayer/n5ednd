import React from "react";
import { PrimitiveView } from "./view/PrimitiveView";
import ReactDOM from "react-dom/client";
import { EnumView } from "./view/EnumView";
import { EBackground } from "./model/Backgrounds/EBackground";
import { EClass } from "./model/Classes/EClass";
import { EClan } from "./model/Clans/EClan";
import "./view/page01.scss";
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
        <PrimitiveView index="proficiencyBonus" readonly />
        <PrimitiveView index="passivePerception" readonly />
        <PrimitiveView index="passiveInsight" readonly />
        <PrimitiveView index="willOfFire" readonly />
      </section>
      <section className="s02">
        <PrimitiveView index="name" label="Character Name" />
        <EnumView enum={EClan} index="clan" />
        <PrimitiveView index="playerName" />
        <EnumView enum={EClass} index="class" />
        <PrimitiveView index="level" />
        <EnumView enum={EBackground} index="background" />
        <PrimitiveView index="rank" />
        <PrimitiveView index="xp" />
      </section>
      <section className="s03">
        <table>
          <tbody>
            <tr>
              <th>
                <PrimitiveView index="strength" />
                <PrimitiveView index="strengthDice" readonly />
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
                <PrimitiveView index="dexterity" />
                <PrimitiveView index="dexterityDice" readonly />
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
                <PrimitiveView index="constitution" />
                <PrimitiveView index="constitutionDice" readonly />
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
                <PrimitiveView index="intelligence" />
                <PrimitiveView index="intelligenceDice" readonly />
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
                <PrimitiveView index="wisdom" />
                <PrimitiveView index="wisdomDice" readonly />
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
                <PrimitiveView index="charisma" />
                <PrimitiveView index="charismaDice" readonly />
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
        <PrimitiveView index="armorClass" readonly />
        <PrimitiveView index="initiative" />
        <PrimitiveView index="speed" />
        <PrimitiveView index="hitPointsMax" />
        <PrimitiveView index="chakraPointsMax" />
        <PrimitiveView index="hitPointsCurrent" />
        <PrimitiveView index="chakraPointsCurrent" />
        <PrimitiveView index="hitDie" />
        <PrimitiveView index="chakraDie" />
      </section>
      <section className="s05">
        <TextView index="personalityTraits" />
        <TextView index="ideals" />
        <TextView index="bonds" />
        <TextView index="flaws" />
      </section>
      <section className="s06">{/* attacks & jutsus */}</section>
      <section className="s07">{/* features, tatins, proficiencies */}</section>
      <section className="s08">{/* equipment */}</section>
    </div>
  </>
);
