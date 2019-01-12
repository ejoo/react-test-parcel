import React from "react";
export default ({ item }) => (
  <p>
    {item.text} <br />
    <small style={{ color: "#999" }}>{item.completed ? "Done" : "Due"}</small>
  </p>
);
