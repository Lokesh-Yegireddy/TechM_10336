import React from "react";
import { createRoot } from "react-dom/client";

const hOneElement = React.createElement("h1", {}, "Heading created using React");

const root = createRoot(document.getElementById("root")); // <-- use createRoot from import
root.render(hOneElement);