// Libs
import * as React from "react";
import { RouteComponentProps} from 'react-router-dom';


interface PortfolioPiecePageProps extends RouteComponentProps<any> {
  match: any;
}

export class PortfolioPiecePage extends React.Component<PortfolioPiecePageProps, {}> {
  validPieces = [
    // TODO: add more lol
    'dropbox-business-redesign'
  ]

  private isValidPiece(portfolioPiece) {
    // Determine if the portfolio piece stub is valid. If it isn't, we'll serve
    // a 404 message and a list of valid portfolio pieces
    if (this.validPieces.indexOf(portfolioPiece) >= 0) {
      console.log("Fetch content")
    } else {
      console.log("Render not found copy")
    }
  }

  render() {
    const { portfolioPiece } = this.props.match.params;

    return <p>{ portfolioPiece }</p>;
  }
}
