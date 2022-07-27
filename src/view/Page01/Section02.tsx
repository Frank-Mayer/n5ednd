import React from "react";
import { EBackground } from "../../model/Backgrounds/EBackground";
import { EClan } from "../../model/Clans/EClan";
import { EClass } from "../../model/Classes/EClass";
import { EnumView } from "../EnumView";
import { PrimitiveView } from "../PrimitiveView";

export const Section02 = () => (
  <section className="s02">
    <PrimitiveView
      keySuffix="1"
      style="underline"
      index="name"
      label="Character Name"
    />
    <EnumView style="underline" enum={EClan} index="clan" />
    <PrimitiveView style="underline" index="playerName" />
    <EnumView style="underline" enum={EClass} index="class" />
    <PrimitiveView style="underline" index="level" />
    <EnumView style="underline" enum={EBackground} index="background" />
    <PrimitiveView style="underline" index="rank" />
    <PrimitiveView style="underline" index="xp" />
  </section>
);
