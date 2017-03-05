import * as React from "react";

// Pages
import { HomePage } from './home'

interface BasePageProps extends React.Props<BasePage>{}

export class BasePage extends React.Component<BasePageProps, {}> {
  render() {
    return (
      <main>
        {this.props.children || <HomePage />}

        <footer>
          <p>Persistent footer</p>
        </footer>
      </main>
    )
  }
}
