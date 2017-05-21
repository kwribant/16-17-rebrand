// Libs
import * as React from "react";

// Static
import { PortfolioPieceList } from '../static/content/portfolio-pieces';

// Components
import { WidthContainer } from "./width-container";

interface ProjectListProps extends React.Props<ProjectList> {
  currentPiece?: string;
  headline?: string;
}

export class ProjectList extends React.Component<ProjectListProps, void> {
  public static defaultProps: Partial<ProjectListProps> = {
    headline: "Selected work"
  };

  private renderProjectsList = () => {
    const projectsListClass: string = "projects-list";

    // Removes current project if there is one
    delete PortfolioPieceList[this.props.currentPiece];

    const listItems = (
      Object.keys(PortfolioPieceList).map((projectItem, index) => {
        const projectData = PortfolioPieceList[projectItem];

        return (
          <li className={`${projectsListClass}__item`} key={index}>
            <a href={`/${projectItem}`} className={`${projectsListClass}__link`}>
              <h2 className={`${projectsListClass}__headline`}>{projectData.headline}</h2>

              <p className={`${projectsListClass}__copy`}>{projectData.copy}</p>
            </a>
          </li>
        );
      })
    );

    return (
      <ul className={projectsListClass}>
        {listItems}
      </ul>
    )
  }

  render() {
    const projectsClass: string = "projects";

    return (
      <section className={projectsClass}>
        <WidthContainer elementClassName={projectsClass}>
          <h1 className={`${projectsClass}__headline`}>{this.props.headline}</h1>

          {this.renderProjectsList()}
        </WidthContainer>
      </section>
    );
  }
}
