// Libs
import * as React from "react";

// Static
import { PortfolioPieceList } from '../static/portfolio-pieces';

// Components
import { WidthContainer } from "./width-container";

interface ProjectListProps extends React.Props<ProjectList> {}

export class ProjectList extends React.Component<ProjectListProps, {}> {
  private renderProjectsList = () => {
    const projectsListClass: string = "projects-list";

    let listItems = [];
    PortfolioPieceList.forEach((projectItem, index) => {
      listItems.push(
        <li className={`${projectsListClass}__item`} key={index}>
          <a href="#" className={`${projectsListClass}__link`}>
            <h2 className={`${projectsListClass}__headline`}>{projectItem.headline}</h2>

            <p className={`${projectsListClass}__copy`}>{projectItem.copy}</p>
          </a>
        </li>
      );
    });

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
          <h1 className={`${projectsClass}__headline`}>Selected work</h1>

          {this.renderProjectsList()}
        </WidthContainer>
      </section>
    );
  }
}
