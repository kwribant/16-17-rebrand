import * as React from "react";

import { WidthContainer } from "./width-container";

export class Footer extends React.Component<{}, void> {
  private renderSocialList = () => {
    const socialContent = [
      {
        'copy': 'LinkedIn',
        'href': 'https://www.linkedin.com/in/kyleribant'
      },
      {
        'copy': 'Email',
        'href': 'mailto: hi@kyleribant.com'
      }
    ];

    const socialList = (
      socialContent.map((socialItem, index) => {
        return (
          <li key={index} className="footer__link-list-item">
            <a href={socialItem.href} target="_blank" className="footer__link">
              {socialItem.copy}
            </a>
          </li>
        );
      })
    );

    return (
      <ul className="footer__link-list">
        {socialList}
      </ul>
    )
  }

  private renderCopyright = () => {
    const date = new Date().getFullYear();

    return (
      <p className="footer__copyright">
        <span className="footer__copyright-symbol">©</span> <span className="footer__copyright-text">{ date } Kyle Ribant</span>
      </p>
    )
  }

  render() {
    return (
      <footer className="footer">
        <WidthContainer elementClassName="footer">
          <div className="footer__content">
            {this.renderSocialList()}

            {this.renderCopyright()}
          </div>
        </WidthContainer>
      </footer>
    );
  }
}
