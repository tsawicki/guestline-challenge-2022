import React from "react";
import { render, screen } from "@testing-library/react";
import { Filters, initialFilters } from ".";

const mockedOnFiltersUpdate = jest.fn();

const setup = () => {
  render(
    <Filters filters={initialFilters} onFiltersUpdate={mockedOnFiltersUpdate} />
  );
};

describe("Filters", () => {
  test("should have start rating filter", () => {
    setup();
    const starRating = screen.getByTestId(/star-rating/i);
    expect(starRating).toBeInTheDocument();
  });

  test("should have adults filter", () => {
    setup();
    const name = screen.getByText(/ADULTS/i);
    expect(name).toBeInTheDocument();
  });

  test("should have children filter", () => {
    setup();
    const name = screen.getByText(/CHILDREN/i);
    expect(name).toBeInTheDocument();
  });

  test("should call onFiltersUpdate on stars click", () => {
    setup();
    const buttonFor2Stars = screen.getByTestId(/2-star-button/i);
    expect(buttonFor2Stars).toBeInTheDocument();
    buttonFor2Stars.click();
    expect(mockedOnFiltersUpdate).toBeCalledWith({
      minAdults: 0,
      minChildren: 0,
      minRating: 2,
    });
  });

  test("should call onFiltersUpdate on adults filter click", () => {
    setup();
    const adultsButton = screen.getByTestId(/adults-increase-button/i);
    expect(adultsButton).toBeInTheDocument();
    adultsButton.click();
    expect(mockedOnFiltersUpdate).toBeCalledWith({
      minAdults: 1,
      minChildren: 0,
      minRating: 0,
    });
  });

  test("should call onFiltersUpdate on children filter click", () => {
    setup();
    const childrenButton = screen.getByTestId(/children-increase-button/i);
    expect(childrenButton).toBeInTheDocument();
    childrenButton.click();
    expect(mockedOnFiltersUpdate).toBeCalledWith({
      minAdults: 0,
      minChildren: 1,
      minRating: 0,
    });
  });
});
