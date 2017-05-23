// Libs
import * as React from "react";
import * as ReactDOM from "react-dom";
// import { browserHistory } from "react-router";
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

// Pages
import { HomePage } from "./containers/home";
import { SubPage } from "./containers/child";

// Components
import { Footer } from "./components/footer";
import { FooterCTA } from "./components/footer-cta";

// Styles
import "../../styles/scss/styles.scss";


ReactDOM.render(
  <BrowserRouter>
    <main>
      {/* Start routes */}
      <Route exact path="/" component={ HomePage } />
      <Route path="/:childStub" component={ SubPage } />
      {/* End routes */}

      <FooterCTA />

      {/* Start persistent footer */}
      <Footer />
      {/* End persistent footer */}
    </main>
  </BrowserRouter>,
  document.getElementById("page-contents")
);
