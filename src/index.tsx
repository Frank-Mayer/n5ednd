import React from "react";
import { PrimitiveView } from "./view/PrimitiveView";
import ReactDOM from "react-dom/client";
import { EnumView } from "./view/EnumView";
import { EBackground } from "./model/Backgrounds/EBackground";
import { EClass } from "./model/Classes/EClass";
import { EClan } from "./model/Clans/EClan";
import "./view/reset.scss";
import "./view/page01.scss";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootEl!).render(
  <>
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
        <div>
          <span>
            <PrimitiveView index="strength" />
            <PrimitiveView index="strengthDice" readonly />
          </span>
        </div>
        <div>
          <span>
            <PrimitiveView index="dexterity" />
            <PrimitiveView index="dexterityDice" readonly />
          </span>
        </div>
        <div>
          <span>
            <PrimitiveView index="constitution" />
            <PrimitiveView index="constitutionDice" readonly />
          </span>
        </div>
        <div>
          <span>
            <PrimitiveView index="intelligence" />
            <PrimitiveView index="intelligenceDice" readonly />
          </span>
        </div>
        <div>
          <span>
            <PrimitiveView index="wisdom" />
            <PrimitiveView index="wisdomDice" readonly />
          </span>
        </div>
        <div>
          <span>
            <PrimitiveView index="charisma" />
            <PrimitiveView index="charismaDice" readonly />
          </span>
        </div>
      </section>
      <section className="s04">{/* armor, initiative, speed, ... */}</section>
      <section className="s05">{/* personality, ideals, ... */}</section>
      <section className="s06">{/* attacks & jutsus */}</section>
      <section className="s07">{/* features, tatins, proficiencies */}</section>
      <section className="s08">{/* equipment */}</section>
    </div>
  </>
);
