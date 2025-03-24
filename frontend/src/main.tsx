// @ts-ignore
import React from "react";
// @ts-ignore
import { StrictMode } from "react";
// @ts-ignore
import { createRoot } from "react-dom/client";

import App from "./App";
import "./App.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
