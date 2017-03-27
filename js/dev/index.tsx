// Libs
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages
import { HomePage } from "./pages/home";
import { PortfolioPiecePage } from "./pages/portfolio-piece";


ReactDOM.render(
  <Router>
    <main>
      {/* Start routes */}
      <Route exact path="/" component={ HomePage } />
      <Route path="/:portfolioPiece" component={ PortfolioPiecePage }/>
      {/* End routes */}

      {/* Start persistent footer */}
      <p>Persistent footer</p>
      {/* End persistent footer */}
    </main>
  </Router>,
  document.getElementById("page-contents")
);
