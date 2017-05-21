// Libs
import * as React from "react";

// Types
import {PortfolioContent} from '../static/typings';

// Containers + Components
import { ProjectList } from '../components/project-list';
import { ProjectDetail } from '../components/project-detail';
import { Spacer } from '../components/spacer';
import { Logo } from '../components/logo';

interface PortfolioPiecePageProps extends React.Props<PortfolioPiecePage> {
  content: PortfolioContent;
  stub: string;
}

export class PortfolioPiecePage extends React.Component<PortfolioPiecePageProps, {}> {
  private renderBackground = () => {
    const backgroundClass: string = 'portfolio-background';

    return (
      <div className={backgroundClass}>
        <div className={`${backgroundClass}__image`} />
      </div>
    )
  }

  render() {
    const portfolioPieceClass: string = "portfolio-piece";

    return (
      <section className={portfolioPieceClass}>
        {this.renderBackground()}

        <Logo />

        <ProjectDetail content={this.props.content} />

        <Spacer />

        <ProjectList headline="Other pieces" currentPiece={this.props.stub} />

        <Spacer />
      </section>
    )
  }
}
