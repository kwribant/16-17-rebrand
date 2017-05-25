// Libs
import * as React from "react";

interface WidthContainerProps extends React.Props<WidthContainer> {
  elementClassName: string;
}

export class WidthContainer extends React.Component<WidthContainerProps, void> {
  render() {
    const { elementClassName, children } = this.props;

    return (
      <div className={`${elementClassName}__width-container`}>
        {children}
      </div>
    );
  }
}
