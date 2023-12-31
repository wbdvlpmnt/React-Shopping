// Imports
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// To Test
import App from "../App";

// Tests
describe("Renders main page correctly", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText("Vite + React");

    // Expectations
    expect(h1).not.toBeNull();
  });

  it("Should show the button count set to 0", async () => {
    // Setup
    await render(<App />);
    const button = await screen.queryByText("count is 0");

    // Expectations
    expect(button).not.toBeNull();
  });

  it("Should show the button count set to 3", async () => {
    // Setup
    await render(<App />);
    const button = await screen.queryByText("count is 0");

    // Pre Expectations
    expect(button).not.toBeNull();

    // Actions
    it("Should show the button count set to 3", async () => {
      // Setup
      const user = userEvent.setup();
      await render(<App />);
      const button = await screen.queryByText("count is 0");

      // Pre Expectations
      expect(button).not.toBeNull();

      // Actions
      await user.click(button as HTMLElement);
      await user.click(button as HTMLElement);
      await user.click(button as HTMLElement);

      // Post Expectations
      expect(button?.innerHTML).toBe("count is 3");
    });
  });
});
