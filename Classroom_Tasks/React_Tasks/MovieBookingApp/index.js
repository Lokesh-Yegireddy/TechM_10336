import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.css";




const htmlRoot=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(htmlRoot);


reactRoot.render(<App />);