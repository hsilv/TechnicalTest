import { render, screen } from "@testing-library/react";
import { Heading, HeadingProps } from "./";

describe("Heading Test Suite", () => {
  const renderHeading = (props: HeadingProps) => {
    render(<Heading {...props}>{props.children}</Heading>);
  };

  it("renders a heading with the correct level", () => {
    renderHeading({ level: "h1", children: "Heading 1" });
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("renders a heading with the correct text", () => {
    renderHeading({ level: "h2", children: "Heading 2" });
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Heading 2");
  });

  it("applies the correct className", () => {
    renderHeading({
      level: "h3",
      children: "Heading 3",
      className: "custom-class",
    });
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveClass("custom-class");
  });

  it("renders different heading levels correctly", () => {
    const levels: HeadingProps["level"][] = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ];
    levels.forEach((level) => {
      renderHeading({ level, children: `Heading ${level.toUpperCase()}` });
      const heading = screen.getByRole("heading", {
        level: parseInt(level[1]),
      });
      expect(heading.tagName).toBe(level.toUpperCase());
    });
  });
});
