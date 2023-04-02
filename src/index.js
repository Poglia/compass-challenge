import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import * as fDefault from "./scripts/default"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

fDefault.enableInputs();