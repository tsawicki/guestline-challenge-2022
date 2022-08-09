import React from "react";
import { render, screen } from "@testing-library/react";
import { Room } from "./";
import { hotelDetails } from "../../queries/mockedData";

const setup = () => {
  render(<Room room={hotelDetails.rooms[0]} />);
};

describe("Room", () => {
  test("should have room name", () => {
    setup();
    const name = screen.getByText(/Deluxe Twin/i);
    expect(name).toBeInTheDocument();
  });
});
