// Modules
import * as React from "react";
import * as ReactDOM from "react-dom";
//import { Router, Route, Link } from "react-router";

// Components
import { Test } from "./components/test-component";

ReactDOM.render(
  <Test name="Kyle" catchphrase="Yas" />,
  document.getElementById("page-contents")
);
