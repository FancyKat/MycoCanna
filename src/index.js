import React from "react";
import ReactDOM from "react-dom";

import Main from "./main.js";


function Entry() {
  return (
      <Main />
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Entry />, root);
