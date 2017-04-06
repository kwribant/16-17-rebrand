import * as React from "react";

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
        <li key={index}>
          <a href={socialItem.href} target="_blank">
            {socialItem.copy}
          </a>
        </li>
      )

      socialList.push(listItem);
    });

    return (
      <ul>
        {socialList}
      </ul>
    )
  }

  private renderCopyright = () => {
    const date = new Date().getFullYear();

    return (
      <p>© { date } Kyle Ribant</p>
    )
  }

  render() {
    return (
      <footer>
        {this.renderSocialList()}

        {this.renderCopyright()}
      </footer>
    );
  }
}
