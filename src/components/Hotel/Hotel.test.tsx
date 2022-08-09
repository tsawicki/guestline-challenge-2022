import React from "react";
import { render, screen } from "@testing-library/react";
import { Hotel } from "./";
import { hotelsList } from "../../queries/mockedData";

const setup = () => {
  render(<Hotel hotel={{ ...hotelsList[0], rooms: [], ratePlans: [] }} />);
};

describe("Hotel", () => {
  test("should have hotel name", () => {
    setup();
    const name = screen.getByText(/OBM Hotel 1/i);
    expect(name).toBeInTheDocument();
  });

  test("should display correct star rating", () => {
    setup();
    const fullStars = screen.getAllByTestId(/full star/i);
    expect(fullStars).toHaveLength(4);
    const empty = screen.getAllByTestId(/empty star/i);
    expect(empty).toHaveLength(1);
  });
});
