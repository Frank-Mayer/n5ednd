import React from "react";
import { PrimitiveView } from "../PrimitiveView";

export const Section01 = () => (
  <section className="s01">
    <PrimitiveView style="left" index="proficiencyBonus" readonly />
    <PrimitiveView style="left" index="passivePerception" />
    <PrimitiveView style="right" index="passiveInsight" />
    <PrimitiveView style="left" index="willOfFire" />
  </section>
);
