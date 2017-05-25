// Libs
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as cx from "classnames";
import { BrowserRouter, Route } from 'react-router-dom';

// Containers
import { HomePage } from "./containers/home";
import { SubPage } from "./containers/child";

// Components
import { Logo } from "./components/logo";
import { Footer } from "./components/footer";
import { FooterCTA } from "./components/footer-cta";

// Styles
import "../../styles/scss/styles.scss";

interface AppState {
  pageLoaded?: boolean;
  currentRoute?: string;
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super();

    this.state = {
      pageLoaded: false,
      currentRoute: window.location.pathname.substr(1)
    }
  }

  public componentDidMount = () => {
    window.addEventListener('hashchange', () => {
      this.setState({
        currentRoute: window.location.pathname.substr(1)
      })
    })

    window.setTimeout(this.setPageLoad, this.getTimeOutAmount());

    document.body.className = 'locked';
  }

  public componentDidUpdate = () => {
    const { pageLoaded } = this.state;

    if (pageLoaded) {
      document.body.className = '';
    }
  }

  private getTimeOutAmount = () => {
    let timeOutAmount: number;
    if (this.state.currentRoute === '') {
      timeOutAmount = 1000;
    } else {
      timeOutAmount = 250;
    }

    return timeOutAmount;
  }

  private setPageLoad = () => {
    this.setState({
      pageLoaded: true
    })
  }

  private renderMask = () => {
    const maskBaseClass: string = 'page-mask';
    const maskClass: string = cx({
      [`${maskBaseClass}--loaded`]: this.state.pageLoaded
    }, maskBaseClass);

    let logo: JSX.Element | undefined;
    if (this.state.currentRoute === '') {
      logo = <Logo />
    }

    return (
      <div className={maskClass}>
        {logo}
      </div>
    )
  }

  public render() {
    return (
      <BrowserRouter>
        <main>
          {/* Routes */}
          <Route exact path="/" component={HomePage} />
          <Route path="/:childStub" component={SubPage} />

          {/* Persistent elements */}
          <FooterCTA />

          <Footer />

          {this.renderMask()}
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(React.createElement(App, {}), document.getElementById('page-contents'));
