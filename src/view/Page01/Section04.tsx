import React from "react";
import { PrimitiveView } from "../PrimitiveView";

export const Section04 = () => (
  <section className="s04">
    <PrimitiveView style="big" index="armorClass" readonly />
    <PrimitiveView style="big" index="initiative" readonly />
    <PrimitiveView style="big" index="speed" readonly />
    <PrimitiveView style="big" index="hitPointsMax" />
    <PrimitiveView style="big" index="chakraPointsMax" />
    <PrimitiveView style="big" index="hitPointsCurrent" readonly />
    <PrimitiveView style="big" index="chakraPointsCurrent" readonly />
    <PrimitiveView style="big" index="hitDice" readonly />
    <PrimitiveView style="big" index="chakraDice" readonly />
  </section>
);
