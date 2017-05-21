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
      <a
        className={buttonClasses}
        href="mailto:hi@kyleribant.com?subject=Hey%20Kyle%21&body=I%27m%20sending%20you%20an%20email%20from%20your%20website"
      >
        <span className={`${buttonClass}__copy-box`}>
          Message me
        </span>

        <span className={`${buttonClass}__overlap-box`} />
      </a>
    );
  }
}
