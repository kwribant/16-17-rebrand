import * as React from "react";

interface PortfolioPiecePageProps extends React.Props<PortfolioPiecePage>{
  params: any;
}

export class PortfolioPiecePage extends React.Component<PortfolioPiecePageProps, {}> {  
  render() {
    return <p>{this.props.params.portfolioPiece}</p>;
  }
}
