import { PortfolioContent } from '../../typings';

export const DropaboutData: PortfolioContent = {
  title: "Dropabout Redesign + Refactor",
  subtitle: "Dropbox’s internal employee catalog establishes a new visual language for internal apps",
  roles: [
    "Development",
    "Design"
  ],
  technologies: [
    "JavaScript",
    "React",
    "SCSS",
    "Python"
  ],
  overview: [
    "I sometimes compare Dropbox’s office to a shopping mall—I see someone new every day (and I may never see them again). Dropabout, our internal employee catalog, is used by [x] Dropboxers a day to see who works on what team, who’s birthday it is, or to update personal information (Enneagram number, neighborhood and previous experience, for example) on their profile.",
    "I worked as the UI engineer alongside two full-stack developers on this week-long project. By utilizing an approved set of colors and type styles already used across Dropbox’s web properties with an engineer’s perspective, I generated a new brand for Dropbox’s internal applications."
  ],
  reflections: [
    "This was my first hands-on experience using React alongside Backbone. By using React, I was able to create visual consistency and enforce quality control by defining and reusing UI components.",
    "If I could do this project again, I would make every repeated element into a component and specify variations and other prop types. Although the styles are consistent, I hardcoded more values (border radius, column widths and thumbnail sizes) that ultimately created more work in the end.",
    "Projects like this teach you to put the extra work to create a consistent experience."
  ],
  pictures: [
    {
      src: "/images/portfolio-pieces/dropabout/homepage.jpg",
      alt: "Dropabout homepage",
      footnote: "The homepage features Dropboxers with birthdays, that are new hires or have work anniversaries"
    },
    {
      src: "/images/portfolio-pieces/dropabout/locations.jpg",
      alt: "Dropabout locations",
      footnote: "The bottom of the homepage lists each Dropbox office location paired with cute iconography from our in-house design team"
    },
    {
      src: "/images/portfolio-pieces/dropabout/profile.jpg",
      alt: "Dropabout profile",
      footnote: "Profiles highlight personal and company information. Personal information is electively defined"
    },
  ]
}
