//
// Experience + Education types
//
interface ExperienceData {
  institution: string,
  role: string,
  dates: string,
  description: string
}
export type ExperienceDataList = ExperienceData[];

//
// Portfolio types
//
type Role = "Design" | "Development" | "Project management";
type Roles = Role | Role[];
type Technology = "Python" | "React" | "SCSS" | "JavaScript" | "TypeScript";
type Technologies = Technology | Technology[];
type Paragraphs = string | string[];
interface Picture {
  src: string,
  alt: string,
  footnote: string
}
export interface PortfolioContent {
  title: string,
  subtitle: string,
  roles: Roles,
  technologies: Technologies,
  overview: Paragraphs,
  reflections: Paragraphs,
  pictures: Picture[],
  url?: string
}

export interface PortfolioPieceDict {
  [key: string]: PortfolioContent
}
