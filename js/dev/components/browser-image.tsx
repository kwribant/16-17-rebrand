// Libs
import * as React from "react";
import * as cx from "classnames";

interface BrowserImageProps extends React.Props<BrowserImage> {
  alt: string;
  src: string;
}

export class BrowserImage extends React.Component<BrowserImageProps, void> {
  projectImageClass = 'browser-image';

  private getImageSrc = (imageSrc) => {
    const mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";

    let finalImageSrc: string;
    if ((window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches)) {
      finalImageSrc = imageSrc.substr(0, imageSrc.lastIndexOf(".")) + "@2x.jpg";
    } else {
      finalImageSrc = imageSrc;
    }

    return finalImageSrc;
  }

  private renderBrowserBar = () => {
    const icons = [];

    for (let i = 0; i < 3; i++) {
      icons.push(
        <li className={`${this.projectImageClass}__icon-list-item`} key={i}>
          <span className={`${this.projectImageClass}__icon`} />
        </li>
      )
    }

    return (
      <div className={`${this.projectImageClass}__browser-bar`}>
        <ul className={`${this.projectImageClass}__icon-list`}>
          {icons}
        </ul>
      </div>
    )
  }


  render() {
    const { alt, src } = this.props;

    return (
      <div className={this.projectImageClass}>
        {this.renderBrowserBar()}

        <img className={`${this.projectImageClass}__image`} src={this.getImageSrc(src)} alt={alt} />
      </div>
    )
  }
}
