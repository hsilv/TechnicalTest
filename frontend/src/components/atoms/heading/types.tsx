export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
}
