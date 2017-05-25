// Libs
import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';

// Content
import { PortfolioPieces } from '../static/content/portfolio-pieces';

// Containers + Components
import { PortfolioPiecePage } from './portfolio-piece';

interface SubPageProps extends RouteComponentProps<any> {
  match: any;
}

export class SubPage extends React.Component<SubPageProps, void> {
  private isValidPiece(portfolioPiece): boolean {
    // Determine if the portfolio piece stub is valid. If it isn't, we'll serve
    // a 404 message and a list of valid portfolio pieces
    const validPieces = Object.keys(PortfolioPieces);
    return validPieces.indexOf(portfolioPiece) >= 0;
  }

  private renderGuts = (stub) => {
    let renderedPage: JSX.Element | undefined;

    if (this.isValidPiece(stub)) {
      const content = PortfolioPieces[stub];

      return (
        <PortfolioPiecePage content={content} stub={stub} />
      )
    } else {
      document.location.href = "/";
    }
  }

  render() {
    const { childStub } = this.props.match.params;

    return this.renderGuts(childStub);
  }
}
