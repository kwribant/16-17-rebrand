// Libs
import * as React from "react";
import { Link } from 'react-router-dom'
import { RouteComponentProps} from 'react-router-dom';


interface HomePageProps extends RouteComponentProps<any> {}

export class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div>
        <Link to="/dropbox-business-redesign">Dropbox Business redesign</Link>

        <p>Homepage</p>
      </div>
    );
  }
}
