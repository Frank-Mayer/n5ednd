import React from "react";
import { PrimitiveView } from "./view/PrimitiveView";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootEl!).render(
  <>
    <PrimitiveView index="proficiencyBonus" readonly />
    <PrimitiveView index="name" />
    <PrimitiveView index="level" />
  </>
);
