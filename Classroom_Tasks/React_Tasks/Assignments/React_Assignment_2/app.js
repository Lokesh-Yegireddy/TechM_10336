import React from "react";
import { createRoot } from "react-dom/client";
const App = () => {
  return (
    <div>
      <h1>It is a React Heading Component</h1>
      <h2>Completed React_Assignment_2 Without CDN Links </h2>
    </div>
  );
};

var htmlRoot = document.getElementById("root");
var rootReact = createRoot(htmlRoot);

rootReact.render(<App />);