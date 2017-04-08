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

// Components
import { Footer } from "./components/footer";

// Styles
import "../../styles/scss/styles.scss";


ReactDOM.render(
  <Router>
    <main>
      {/* Start routes */}
      <Route exact path="/" component={ HomePage } />
      <Route path="/:portfolioPiece" component={ PortfolioPiecePage }/>
      {/* End routes */}

      {/* Start persistent footer */}
      <Footer />
      {/* End persistent footer */}
    </main>
  </Router>,
  document.getElementById("page-contents")
);
