import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./assets/css/Global";
import "./assets/fonts/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
