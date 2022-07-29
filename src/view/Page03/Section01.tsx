import React from "react";
import { PrimitiveView } from "../PrimitiveView";

export const Section01 = () => (
  <section className="s01">
    <PrimitiveView index="ninjutsuAttackBonus" style="underline" />
    <PrimitiveView index="taijutsuAttackBonus" style="underline" />
    <PrimitiveView index="genjutsuAttackBonus" style="underline" />
    <PrimitiveView
      index="ninjutsuSaveDC"
      label="Ninjutsu Save DC"
      style="underline"
    />
    <PrimitiveView
      index="taijutsuSaveDC"
      label="Taijutsu Save DC"
      style="underline"
    />
    <PrimitiveView
      index="genjutsuSaveDC"
      label="Genjutsu Save DC"
      style="underline"
    />
  </section>
);
