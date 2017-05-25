// Libs
import * as React from "react";

// Components
import { CalloutBox } from "./callout-box";
import { CTA } from "./cta";
import { Logo } from "./logo";
import { WidthContainer } from "./width-container";

interface HeroProps extends React.Props<Hero> {}

export class Hero extends React.Component<HeroProps, void> {
  private renderBackground = () => {
    const backgroundClass: string = "hero-background";

    return (
      <div className={`${backgroundClass}__container`}>
        <div className={`${backgroundClass}__section--main`}>
          <WidthContainer elementClassName={backgroundClass}>
            <div className={`${backgroundClass}__content`}>
              <CalloutBox text="Passion" />

              <CalloutBox text="Dedication" />
            </div>
          </WidthContainer>
        </div>

        <div className={`${backgroundClass}__section--color`} />
      </div>
    )
  }

  render() {
    const heroClass: string = "hero";

    return (
      <section className={heroClass}> {/* Footer is full width */}
        {this.renderBackground()}

        <WidthContainer elementClassName={heroClass}>
          <div className={`${heroClass}__content`}>
            <Logo />

            <h1 className={`${heroClass}__headline`}>
              Finding meaning through the delicate balance of design, engineering, convention and risk
            </h1>

            <CTA small={true} />
          </div>
        </WidthContainer>
      </section>
    );
  }
}
