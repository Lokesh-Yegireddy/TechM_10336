import React from "react";

const TitleComponent = () => {
  return <h3 style={{ color: "blue" }}>This is TitleComponent content</h3>;
};

const ComponentSyntaxExample = () => {
  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h2>Component Syntax Comparison</h2>

      <p>1️⃣ Using {"{TitleComponent}"}:</p>
      <div>{String(TitleComponent)}</div>

      <p>2️⃣ Using {"{<TitleComponent /> }"}:</p>
      <TitleComponent />

      <p>3️⃣ Using {"{<TitleComponent></TitleComponent>}"}:</p>
      <TitleComponent></TitleComponent>
    </div>
  );
};

export default ComponentSyntaxExample;
