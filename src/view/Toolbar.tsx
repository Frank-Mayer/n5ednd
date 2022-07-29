import React from "react";
import { Download, SavedStatus, Upload } from "../save";

export const Toolbar = () => (
  <div id="toolbar">
    <SavedStatus />
    <Upload />
    <Download />
  </div>
);
