import * as React from "react";
import * as cx from "classnames";

interface ButtonProps extends React.Props<Button> {
  small?: boolean;
}

export class Button extends React.Component<ButtonProps, {}> {
  render() {
    const buttonClass: string = "button";
    const buttonClasses = cx({
      [`${buttonClass}--small`]: !!this.props.small
    }, buttonClass);

    return (
      <a href="#" className={buttonClasses}>
        <span className={`${buttonClass}__copy-box`}>
          Message me
        </span>

        <span className={`${buttonClass}__overlap-box`} />
      </a>
    );
  }
}
