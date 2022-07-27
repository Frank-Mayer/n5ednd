import React from "react";
import { PrimitiveView } from "../PrimitiveView";

export const Section01 = () => (
  <section className="s01">
    <PrimitiveView
      keySuffix="2"
      index="name"
      label="Character Name"
      style="underline"
    />
    <PrimitiveView style="underline" index="age" />
    <PrimitiveView style="underline" index="height" />
    <PrimitiveView style="underline" index="weight" />
    <PrimitiveView index="villageRank" style="underline" />
    <PrimitiveView style="underline" index="eyes" />
    <PrimitiveView style="underline" index="skin" />
    <PrimitiveView style="underline" index="hair" />
  </section>
);
