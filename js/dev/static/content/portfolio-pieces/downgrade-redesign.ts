import { PortfolioContent } from '../../typings';

export const DowngradeRedesignData: PortfolioContent = {
  title: "Dropbox Business Downgrade Redesign",
  subtitle: "Redesign and re-architecture of Dropbox Business’ downgrade experience",
  roles: "Development",
  technologies: [
    "JavaScript",
    "React",
    "SCSS",
    "Python"
  ],
  overview: [
    "The legacy downgrade experience is a three-step linear funnel that consists of a landing page, a mandatory survey and a success page. The landing page, while it surfaces several reasons to keep a Business subscription, sports a lack-luster design and offers only two escape points (contact sales or go to settings).",
    "The new downgrade experience adds a fourth step to the funnel with multiple exit points. Customers start at a landing page, are sent to a customized landing page based on their primary concern, then a confirm page (where they are given one last opportunity to keep their subscription) and, finally, a success message.",
    "The new flow also sports a sexy design and an even-sexier architecture. It’s coded in Server-side React, so everything is component-based. The controller logic has been refactored and while it has more “guts,” the new patterns make traversing the code faster and easier."
  ],
  reflections: [
    "I look back on this project with an increased heart rate and a set of loving eyes. This was jammed into a mere seven days with two engineers. To get this project out the door in time, I actively prioritized and outlined every step we needed to take. It’s one of my favorite projects up to date."
  ],
  pictures: [
    {
      src: "/images/portfolio-pieces/downgrade-redesign/landing.jpg",
      alt: "Downgrade landing page",
      footnote: "Customers are sent to a customized page detailing their primary concern"
    },
    {
      src: "/images/portfolio-pieces/downgrade-redesign/pricing.jpg",
      alt: "Downgrade pricing component",
      footnote: "Dynamic, customer-based pricing shows how much money customers are spending and how much can be saved"
    },
    {
      src: "/images/portfolio-pieces/downgrade-redesign/reusable-component.jpg",
      alt: "Downgrade table component",
      footnote: "Complex UI elements are now easily recreated thanks to component-based development"
    },
    {
      src: "/images/portfolio-pieces/downgrade-redesign/form.jpg",
      alt: "Downgrade form",
      footnote: "Refactored controller logic creates a seamless downgrade flow"
    }
  ]
}
