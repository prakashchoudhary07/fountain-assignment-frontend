import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputLabel from "../../src/components/input-label";

describe("InputLabel component", () => {
  it("InputLabel renders label and input", async () => {
    const mockSetInputValue = vi.fn();
    const props = {
      id: "test-input",
      name: "test-name",
      label: "Test Label",
      inputValue: "search",
      setInputValue: mockSetInputValue,
    };

    render(<InputLabel {...props} />);

    // Check label rendering
    expect(screen.getByText(props.label)).toBeInTheDocument();

    // Check input rendering
    const input = await screen.findByDisplayValue(props.inputValue);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(props.inputValue);
  });

  it("InputLabel updates value on input change", async () => {
    const mockSetInputValue = vi.fn();
    const props = {
      id: "test-input",
      name: "test-name",
      label: "Test Label",
      inputValue: "",
      setInputValue: mockSetInputValue,
    };

    render(<InputLabel {...props} />);

    const input = await screen.findByDisplayValue(props.inputValue);

    await userEvent.type(input, "New Value");

    expect(mockSetInputValue).toHaveBeenCalledTimes(9);
    expect(mockSetInputValue).toBeCalledWith("N");
    expect(mockSetInputValue).toBeCalledWith("e");
    expect(mockSetInputValue).toBeCalledWith("w");
  });
});
