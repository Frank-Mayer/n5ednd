import React from "react";
import { Download, SavedStatus, Upload } from "../save";
import { Rest } from "./Actions/Rest";

export const Toolbar = () => (
  <div id="toolbar">
    <SavedStatus />
    <Upload />
    <Download />
    <Rest />
  </div>
);
