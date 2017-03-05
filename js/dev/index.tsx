// Modules
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

// Pages
import { BasePage } from "./pages/base";
import { HomePage } from "./pages/home";
import { PortfolioPiecePage } from "./pages/portfolio-piece";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />

      <Route path="/:portfolioPiece" component={PortfolioPiecePage}/>
    </Route>
  </Router>,
  document.getElementById("page-contents")
);
