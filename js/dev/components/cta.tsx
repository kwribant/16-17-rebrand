// Libs
import * as React from "react";
import * as cx from "classnames";

// Components
import { Button } from './button';

interface CTAProps extends React.Props<CTA> {
  small?: boolean;
}

export class CTA extends React.Component<CTAProps, {}> {
  render() {
    const ctaClass = "cta";
    const ctaClasses = cx({
      [`${ctaClass}--small`]: !!this.props.small
    }, ctaClass);

    return (
      <div className={ctaClasses}>
        <p className={`${ctaClass}__copy`}>I’m taking small- and medium-sized projects</p>

        <Button small={this.props.small} />

        <p className={`${ctaClass}__link-copy`}>
          or <a href="#" className={`${ctaClass}__link`}>view résumé</a>
        </p>
      </div>
    );
  }
}
