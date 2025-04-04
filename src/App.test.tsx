import App from "./App";
import { render, screen } from "@testing-library/react";
describe("App test", () => {
  it("should render App title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /hr teste/i,
      })
    );
  });
});
