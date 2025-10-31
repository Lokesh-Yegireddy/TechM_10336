
import React from "react";

 function NestedHeader() {
  return React.createElement(
    "div",
    { className: "title" },
    React.createElement("h1", null, "Heading 1"),
    React.createElement("h2", null, "Heading 2"),
    React.createElement("h3", null, "Heading 3")
  );
}

export default NestedHeader;