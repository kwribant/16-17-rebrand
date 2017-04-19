import { PortfolioContent } from '../typings';

export const ArborData: PortfolioContent = {
  title: "Arbor",
  subtitle: "Component library and SCSS framework paired as a source of truth for development and design",
  roles: [
    "Project management",
    "Development"
  ],
  technologies: [
    "TypeScript",
    "React",
    "SCSS"
  ],
  overview: [
    "Arbor provides a source of truth for both developers and designers. It encourages a high standard of development and design by archiving standardized UI elements. Time spent writing custom CSS, HTML and JavaScript is now replaced by creating new features that use emerging technologies (like TypeScript).",
    "I served as both an engineer and project manager on Arbor. I was responsible for recruiting passionate teammates, creating meaningful agendas and encouraging follow ups all while crafting a post-development adoption plan."
  ],
  reflections: [
    "Arbor was originally intended to only be a pattern library. Pairing it with a SCSS framework happened too late in the planning period, which added an unexpected amount of work. Creating a framework alongside the pattern library was a good choice, but if I could do this again, I would work harder to clarify the product’s focus with my team and address concerns that lie outside of that purpose.",
    "Arbor taught me that creating a vision for a product, developing it and encouraging adoption are three very different things that requires immense attention to detail."
  ],
  pictures: [
    {
      src: "/images/portfolio-pieces/arbor/homepage.jpg",
      alt: "Arbor homepage",
      footnote: "The Arbor site organizes UI elements as well as typography and colors in a digestible format"
    },
    {
      src: "/images/portfolio-pieces/arbor/grid.jpg",
      alt: "Arbor homepage",
      footnote: "The grid builder provides the end user with instantaneous feedback on what is possible within the framework’s boundaries"
    },
    {
      src: "/images/portfolio-pieces/arbor/buttons.jpg",
      alt: "Arbor homepage",
      footnote: "Each element is paired with a snippet to close the adoption barrier for developers"
    }
  ]
}
