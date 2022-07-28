import React from "react";
import ReactDOM from "react-dom/client";
import { Download, SavedStatus, Upload } from "./save";
import { Page01 } from "./view/Page01";
import { Page02 } from "./view/Page02";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootEl!).render(
  <React.StrictMode>
    <div id="toolbar">
      <SavedStatus />
      <Upload />
      <Download />
    </div>
    <Page01 />
    <Page02 />
  </React.StrictMode>
);
