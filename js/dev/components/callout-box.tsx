// Libs
import * as React from "react";

interface CalloutBoxProps extends React.Props<CalloutBox> {
  text: string;
}

export class CalloutBox extends React.Component<CalloutBoxProps, void> {
  render() {
    return (
      <i className="callout-text">
        {this.props.text}
      </i>
    );
  }
}
