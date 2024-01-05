import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./style.css";

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(<App />);
