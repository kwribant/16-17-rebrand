// Libs
import * as React from "react";

// Components
import { WidthContainer } from "./width-container";

export class Spacer extends React.Component<{}, void> {
  render() {
    return (
      <WidthContainer elementClassName="spacer">
        <div className="spacer__line" />
      </WidthContainer>
    );
  }
}
