// Libs
import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';
import { PortfolioPieces } from '../static/portfolio-pieces';


interface PortfolioPiecePageProps extends RouteComponentProps<any> {
  match: any;
}

export class PortfolioPiecePage extends React.Component<PortfolioPiecePageProps, {}> {
  private isValidPiece(portfolioPiece): boolean {
    // Determine if the portfolio piece stub is valid. If it isn't, we'll serve
    // a 404 message and a list of valid portfolio pieces
    let isValid: boolean = false;

    if (PortfolioPieces.indexOf(portfolioPiece) >= 0) {
      isValid = true
    }

    return isValid;
  }

  private getContent(portfolioPiece) {
    let content: string | undefined;

    if (this.isValidPiece(portfolioPiece)) {
      return portfolioPiece;
    } else {
      return "ERR: Unmatched portfolio piece"
    }
  }

  render() {
    const { portfolioPiece } = this.props.match.params;

    return <p>{ this.getContent(portfolioPiece) }</p>;
  }
}
