import * as React from "react";

interface TestProps extends React.Props<Test>{
  name: string;
  catchphrase: string;
}

export class Test extends React.Component<TestProps, {}> {
  render() {
    return <h1>Hello from {this.props.name}, {this.props.catchphrase}!</h1>;
  }
}
