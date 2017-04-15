import * as React from "react";

interface WidthContainerProps extends React.Props<WidthContainer> {
  elementClassName: string;
}

export class WidthContainer extends React.Component<WidthContainerProps, {}> {
  render() {
    const { elementClassName, children } = this.props;

    return (
      <div className={`${elementClassName}__width-container`}> {/* Div keeps the max width of 1024 */}
        {children}
      </div>
    );
  }
}
