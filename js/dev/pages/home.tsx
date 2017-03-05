import * as React from "react";

interface HomePageProps extends React.Props<HomePage>{}

export class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return <p>Homepage</p>;
  }
}
