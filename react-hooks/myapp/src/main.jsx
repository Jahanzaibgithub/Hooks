import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import myProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <myProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </myProvider>
);
