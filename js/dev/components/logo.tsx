import * as React from "react";

export class Logo extends React.Component<{}, {}> {
  render() {
    return (
      <div className="logo">
        <p className="logo__name">Kyle Ribant</p>

        <p className="logo__profession">Development + Design</p>
      </div>
    );
  }
}
