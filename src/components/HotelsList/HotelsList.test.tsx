import React from "react";
import { render, screen } from "@testing-library/react";
import { HotelsList } from "./";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { hotelsList, hotelDetails } from "../../queries/mockedData";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const setup = () => {
  const mock = new MockAdapter(axios);
  mock
    .onGet("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
    .reply(200, hotelsList);
  mock
    .onGet("https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG1")
    .reply(200, hotelDetails);
  render(
    <QueryClientProvider client={queryClient}>
      <HotelsList />
    </QueryClientProvider>
  );
};

describe("HotelsList", () => {
  test("should render filters", () => {
    setup();
    const filterLabel = screen.getByText(/FILTER ROOMS/i);
    expect(filterLabel).toBeInTheDocument();
  });

  test("should render spinner initially", async () => {
    setup();
    const spinner = screen.getByTestId(/spinner/i);
    expect(spinner).toBeInTheDocument();
  });

  test("should render hotels eventually", async () => {
    setup();
    const hotelName = await screen.findByText(/OBM Hotel 1/i);
    expect(hotelName).toBeVisible();
  });
});
