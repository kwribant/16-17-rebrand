// Libs
import * as React from "react";

// Components
import { CTA } from "./cta";
import { WidthContainer } from "./width-container";

export class FooterCTA extends React.Component<{}, {}> {
  render() {
    const footerCTAClass: string = "footer-cta";

    return (
      <footer className={footerCTAClass}>
        <WidthContainer elementClassName={footerCTAClass}>
          <div className={`${footerCTAClass}__content`}>
            <CTA />
          </div>
        </WidthContainer>
      </footer>
    );
  }
}
