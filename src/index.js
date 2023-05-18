import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el);
document.body.classList.add("bg-orange-50");
root.render(<App />);
