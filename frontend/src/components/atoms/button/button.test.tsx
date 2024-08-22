import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./";

describe("Button Test Suite", () => {
  it("renders a button with the given text", () => {
    render(
      <Button styleType="icon" variant="danger">
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  it("applies the correct variant class", () => {
    render(
      <Button styleType="solid" variant="primary">
        Primary Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("primary");
  });

  it("applies the correct styleType class", () => {
    render(
      <Button styleType="outline" variant="secondary">
        Outline Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("outline");
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button styleType="solid" variant="success" onClick={handleClick}>
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders a disabled button", () => {
    render(
      <Button styleType="solid" variant="warning" disabled>
        Disabled Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders a button with custom className", () => {
    render(
      <Button styleType="solid" variant="tertiary" className="custom-class">
        Custom Class Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
