import React from "react";
import { render, screen } from "@testing-library/react";
import { CoverImage } from ".";

const setup = () => {
  render(<CoverImage />);
};

describe("CoverImage", () => {
  test("should have correct heading", () => {
    setup();
    const heading = screen.getByText(/GUESTLINE INTERVIEW CHALLENGE 2022/i);
    expect(heading).toBeInTheDocument();
  });
});
