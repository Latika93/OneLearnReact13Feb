import React from "react";
import ReactDOM from "react-dom";

const fname = "Latika";
const lname = "Verma";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
