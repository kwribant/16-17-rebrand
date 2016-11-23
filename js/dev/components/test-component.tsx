import * as React from "react";

export interface TestProps { name: string; catchphrase: string; }

export class Test extends React.Component<TestProps, {}> {
  render() {
    return <h1>Hello from {this.props.name}, {this.props.catchphrase}!</h1>;
  }
}
