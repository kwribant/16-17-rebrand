// Libs
import * as React from "react";

export class Logo extends React.Component<{}, void> {
  render() {
    return (
      <div className="logo">
        <a href="/" className="logo__link">
          <p className="logo__name">Kyle Ribant</p>

          <p className="logo__profession">Development + Design</p>
        </a>
      </div>
    );
  }
}
