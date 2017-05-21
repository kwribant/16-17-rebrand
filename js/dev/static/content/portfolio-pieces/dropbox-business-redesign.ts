import { PortfolioContent } from '../../typings';

export const DropboxBusinessRedesignData: PortfolioContent = {
  title: "Dropabout Business Redesign",
  subtitle: "Dropbox Business gets a visual overhaul and a first pass at going responsive",
  roles: "Development",
  technologies: [
    "JavaScript",
    "SCSS",
    "Python"
  ],
  overview: [
    "I started at Dropbox in October 2014 as one of two website-focused front end engineers. At the time, the Dropbox Business site supported one width and lacked a scalable site architecture. Our main sources of revenue were minor modifications to the homepage and new SEO landing pages. My first projects involved creating new sections of the site, including the Trust suite.",
    "What started out as a variant-based layout experiment on the homepage became an entire redesign of Dropbox Business. Color and typography were standardized, the design featured a new visual concept, and a responsive layout was considered for the first time."
  ],
  reflections: [
    "This was the first large project our team (of four, at the time) took on. At first, I was the sole developer working on this redesign. I didn’t realize the complexity of the project and as the deadline steadily approached, the rest of the team joined in and pushed it past the finish line.",
    "This project taught me that actively prioritizing your work, constantly communicating with your team and providing brutally honest time estimates are necessary to produce something you’re proud of."
  ],
  pictures: [
    {
      src: "/images/portfolio-pieces/dropbox-business/homepage.jpg",
      alt: "Dropbox Business homepage",
      footnote: "The homepage contains enough information for prospective Business admins to make their decision"
    },
    {
      src: "/images/portfolio-pieces/dropbox-business/pricing.jpg",
      alt: "Dropbox Business pricing table",
      footnote: "Users are able to make the right decision by comparing the price and feature differences between Dropbox’s available product lines"
    },
    {
      src: "/images/portfolio-pieces/dropbox-business/tour.jpg",
      alt: "Dropbox Business tour page",
      footnote: "Scalable components allow pages such as Tour to expose meticulously crafted content, boosting SEO"
    },
  ],
  url: 'http://dropbox.com/business'
}
