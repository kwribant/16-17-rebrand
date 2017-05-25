// Libs
import * as React from "react";

// Static
import { PortfolioContent } from '../static/typings';

// Components
import { WidthContainer } from "./width-container";
import { BrowserImage } from "./browser-image";

interface ProjectDetailProps extends React.Props<ProjectDetail> {
  content: PortfolioContent;
}

export class ProjectDetail extends React.Component<ProjectDetailProps, void> {
  projectCopyClass = 'project-copy';

  private reformatCapitalization = (contentList) => {
    const newContentList = [];

    contentList.map((contentItem, index) => {
      if (index !== 0) {
        contentItem = contentItem.toLowerCase();
      }
      newContentList.push(contentItem);
    });

    return newContentList;
  }

  private renderTypeList = (content, shouldReformat: boolean = false) => {
    let typeList: string;

    if (Array.isArray(content)) {
      let contentToTransform = content;
      if (shouldReformat) {
        contentToTransform = this.reformatCapitalization(content);
      }

      typeList = contentToTransform.join(', ');
    } else {
      typeList = content;
    }

    return (
      <p className={`${this.projectCopyClass}__paragraph`}>{typeList}</p>
    );
  }

  private renderParagraphs = (paragraphList) => {
    return (
      paragraphList.map((paragraph, index) => {
        return (
          <p className={`${this.projectCopyClass}__paragraph`} key={index}>{paragraph}</p>
        )
      })
    )
  }

  private renderCopy = () => {
    const { content } = this.props;
    const projectSubheadlineClass: string = `${this.projectCopyClass}__subheadline`;

    let projectLink: JSX.Element | undefined;
    if (content.url) {
      projectLink = (
        <a href={content.url} className={`${this.projectCopyClass}__link`} target="_blank">
          {`View ${content.title}`}
        </a>
      )
    }

    return (
      <div className={this.projectCopyClass}>
        <h2 className={`${this.projectCopyClass}__headline`}>{content.subtitle}</h2>

        <h3 className={projectSubheadlineClass}>Role</h3>
        {this.renderTypeList(content.roles, true)}

        <h3 className={projectSubheadlineClass}>Technologies</h3>
        {this.renderTypeList(content.technologies)}

        <h3 className={projectSubheadlineClass}>Overview</h3>
        {this.renderParagraphs(content.overview)}

        <h3 className={projectSubheadlineClass}>Reflections</h3>
        {this.renderParagraphs(content.reflections)}

        {projectLink}
      </div>
    )
  }

  private renderImages = () => {
    const projectImagesClass: string = "project-images";
    const { content } = this.props;

    return (
      <div className={projectImagesClass}>
        <div className={`${projectImagesClass}__background`} />
        <ul className={`${projectImagesClass}__list`}>
          {
            content.pictures.map((picture, index) => {
              return (
                <li className={`${projectImagesClass}__list-item`} key={index}>
                  <figure className={`${projectImagesClass}__figure`}>
                    <BrowserImage
                      src={picture.src}
                      alt={picture.alt}
                    />

                    <figcaption className={`${projectImagesClass}__footnote`}>{picture.footnote}</figcaption>
                  </figure>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    const projectDetailClass: string = "project-detail";

    return (
      <WidthContainer elementClassName={projectDetailClass}>
        <div className={`${projectDetailClass}__column-wrapper`}>

          <div className={`${projectDetailClass}__headline-wrapper`}>
            <div className={`${projectDetailClass}__background`} />
            <h1 className={`${projectDetailClass}__headline`}>{this.props.content.title}</h1>
          </div>

          <div className={`${projectDetailClass}__portfolio-content`}>
            {this.renderCopy()}

            {this.renderImages()}
          </div>
        </div>
      </WidthContainer>
    );
  }
}
