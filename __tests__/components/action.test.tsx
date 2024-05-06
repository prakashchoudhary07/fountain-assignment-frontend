import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Action from "../../src/components/action";

describe("Action component test", () => {
  it("Action renders button with text and calls handleClick on click", async () => {
    const mockHandleClick = vi.fn();
    const props = {
      name: "Test Action",
      className: "bg-blue-500 text-white",
      handelClick: mockHandleClick,
    };

    render(<Action {...props} />);

    // Check button rendering and text
    const button = screen.getByRole("button", { name: props.name });
    expect(button).toBeInTheDocument();

    // Simulate click and check mock function call
    await userEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
