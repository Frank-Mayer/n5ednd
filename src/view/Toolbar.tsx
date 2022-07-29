import React from "react";
import { Download, SavedStatus, Upload } from "../save";
import { Rest } from "./Actions/Rest";
import { TakeHit } from "./Actions/TakeHit";

export const Toolbar = () => (
  <div id="toolbar">
    <SavedStatus />
    <Upload />
    <Download />
    <Rest />
    <TakeHit />
  </div>
);
