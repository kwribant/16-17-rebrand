import * as React from "react";

import { WidthContainer } from "./width-container";

export class Footer extends React.Component<{}, {}> {
  private renderSocialList = () => {
    const socialContent = [
      {
        'href': 'www.linkedin.com/in/kyleribant',
        'copy': 'LinkedIn'
      },
      {
        'href': 'mailto: hi@kyleribant.com',
        'copy': 'Email'
      }
    ];

    let socialList = [];

    socialContent.forEach((socialItem, index) => {
      const listItem = (
        <li key={index} className="footer__link-list-item">
          <a href={socialItem.href} target="_blank" className="footer__link">
            {socialItem.copy}
          </a>
        </li>
      )

      socialList.push(listItem);
    });

    return (
      <ul className="footer__link-list">
        {socialList}
      </ul>
    )
  }

  private renderCopyright = () => {
    const date = new Date().getFullYear();

    return (
      <p className="footer__copyright">© { date } Kyle Ribant</p>
    )
  }

  render() {
    return (
      <footer className="footer"> {/* Footer is full width */}
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
