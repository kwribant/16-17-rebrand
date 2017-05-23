// Libs
import * as React from "react";
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom';

// Components
import { Hero } from '../components/hero';
import { ProjectList } from '../components/project-list';
import { Spacer } from '../components/spacer';
import { Experiences } from '../components/experience';

interface HomePageProps extends RouteComponentProps<any> {}

export class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div>
        <Hero />

        <Spacer />

        <ProjectList />

        <Spacer />

        <Experiences />

        <Spacer />
      </div>
    );
  }
}
