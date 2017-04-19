// Libs
import * as React from "react";

// Static
import { ExperienceOrder } from '../static/content/experience';

// Components
import { CalloutBox } from "./callout-box";
import { CTA } from "./cta";
import { Logo } from "./logo";
import { WidthContainer } from "./width-container";

export class Experiences extends React.Component<{}, {}> {
  private renderExperienceList = (experienceList) => {
    const experienceListClass: string = "experience-list";

    const experienceItems = [];
    experienceList.forEach((experienceItem, index) => {
      experienceItems.push(
        <li className={`${experienceListClass}__item`} key={index}>
          <h2 className={`${experienceListClass}__headline`}>{experienceItem.institution}</h2>
          <p className={`${experienceListClass}__meta`}>{experienceItem.role}</p>
          <p className={`${experienceListClass}__meta`}>{experienceItem.dates}</p>
          <p className={`${experienceListClass}__description`}>{experienceItem.description}</p>
        </li>
      );
    });

    return (
      <ul className={`${experienceListClass}`}>
        {experienceItems}
      </ul>
    );
  }

  private renderExperienceListSection = () => {
    const experienceSectionClass: string = "experience-section";

    const experienceSections = [];
    ExperienceOrder.forEach((experienceSectionItem, index) => {
      experienceSections.push(
        <div className={`${experienceSectionClass}__list-container`} key={index}>
          <h1 className={`${experienceSectionClass}__headline`}>{experienceSectionItem.title}</h1>

          {this.renderExperienceList(experienceSectionItem.content)}
        </div>
      );
    });

    return (
      <WidthContainer elementClassName="experience">
        {experienceSections}
      </WidthContainer>
    )
  }

  private renderBackground = () => {
    const backgroundClass: string = "experience-background";

    return (
      <div className={backgroundClass}>
        <WidthContainer elementClassName={backgroundClass}>
          <div className={`${backgroundClass}__content`}>
          </div>
        </WidthContainer>
      </div>
    );
  }

  render() {
    const experienceClass: string = "experience";

    return (
      <section className={experienceClass}>
        {this.renderBackground()}

        {this.renderExperienceListSection()}
      </section>
    );
  }
}
