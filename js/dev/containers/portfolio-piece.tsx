// Libs
import * as React from "react";

// Types
import {PortfolioContent} from '../static/typings';

// Components
import { Logo } from '../components/logo';
import { ProjectDetail } from '../components/project-detail';
import { ProjectList } from '../components/project-list';
import { Spacer } from '../components/spacer';

interface PortfolioPiecePageProps extends React.Props<PortfolioPiecePage> {
  content: PortfolioContent;
  stub: string;
}

export class PortfolioPiecePage extends React.Component<PortfolioPiecePageProps, void> {
  private renderBackground = () => {
    const backgroundClass: string = 'portfolio-background';

    return (
      <div className={backgroundClass}>
        <div className={`${backgroundClass}__image`} />
      </div>
    )
  }

  render() {
    return (
      <section className='portfolio-piece'>
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
