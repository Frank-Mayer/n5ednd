import React from "react";
import ReactDOM from "react-dom/client";
import { Toolbar } from "./view/Toolbar";
import { Page01 } from "./view/Page01";
import { Page02 } from "./view/Page02";
import { Page03 } from "./view/Page03";
import { Page04 } from "./view/Page04";
import { Footer } from "./view/Footer";

import { onServiceWorkerCacheUpdated } from "@frank-mayer/service-worker/client";

onServiceWorkerCacheUpdated(() => {
  if (
    confirm("A new version of this app is available.\nReload now to update?")
  ) {
    window.location.reload();
  }
});

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootEl!).render(
  <>
    <Toolbar />
    <Page01 />
    <Page02 />
    <Page03 />
    <Page04 />
    <Footer />
  </>
);
