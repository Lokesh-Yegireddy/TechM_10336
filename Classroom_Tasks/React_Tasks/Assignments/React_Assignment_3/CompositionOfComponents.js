import React from "react";

const ChildComponent = () => <p>This is the Child Component.</p>;

const ParentComponent = () => (
  <div style={{ border: "2px solid gray", padding: "10px", marginTop: "10px" }}>
    <h3>This is the Parent Component</h3>
    <ChildComponent />
  </div>
);

export default ParentComponent;
