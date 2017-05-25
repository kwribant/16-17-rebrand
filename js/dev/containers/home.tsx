// Libs
import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';

// Components
import { Hero } from '../components/hero';
import { Experiences } from '../components/experience';
import { ProjectList } from '../components/project-list';
import { Spacer } from '../components/spacer';

interface HomePageProps extends RouteComponentProps<any> {}

export class HomePage extends React.Component<HomePageProps, void> {
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
