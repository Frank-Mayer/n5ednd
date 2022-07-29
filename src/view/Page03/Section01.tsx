import React from "react";
import { PrimitiveView } from "../PrimitiveView";

export const Section01 = () => (
  <section className="s01">
    <PrimitiveView index="ninjutsuAttackBonus" style="underline" />
    <PrimitiveView index="taijutsuAttackBonus" style="underline" />
    <PrimitiveView index="genjutsuAttackBonus" style="underline" />
    <PrimitiveView index="ninjutsuSaveDC" style="underline" />
    <PrimitiveView index="taijutsuSaveDC" style="underline" />
    <PrimitiveView index="genjutsuSaveDC" style="underline" />
  </section>
);
