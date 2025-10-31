import React from "react";

const Greeting = ({ name, color }) => {
  return (
    <h2 style={{ color }}>
      Hello {name}, welcome to React!
    </h2>
  );
};

export default Greeting;
