import { render } from "@testing-library/react";
import { ReactComponent as TestIcon } from "@assets/test.svg";
import { Icon } from "./";

describe("Icon Test Suite", () => {
  it("renders an SVG icon", () => {
    const { container } = render(<Icon svg={TestIcon} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
  });

  it("applies the correct size", () => {
    const size = 32;
    const { container } = render(<Icon svg={TestIcon} size={size} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("width", size.toString());
    expect(svgElement).toHaveAttribute("height", size.toString());
  });

  it("applies the correct color", () => {
    const color = "red";
    const { container } = render(<Icon svg={TestIcon} color={color} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("fill", color);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    const { container } = render(<Icon svg={TestIcon} className={className} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveClass(className);
  });

  it("spreads additional props to the SVG element", () => {
    const { container } = render(
      <Icon svg={TestIcon} data-testid="custom-icon" />
    );
    const svgElement = container.querySelector("[data-testid='custom-icon']");
    expect(svgElement).toBeInTheDocument();
  });
});
