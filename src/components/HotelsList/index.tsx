import React, { useState } from "react";
import styled from "styled-components";
import { useHotelsData } from "../../queries";
import { Filters, initialFilters } from "../Filters";
import { Hotel } from "../Hotel";
import { Spinner } from "../Spinner";

export const HotelsList = () => {
  const { hotels, isLoading } = useHotelsData();
  const [filters, setFilters] = useState(initialFilters);

  const filteredHotels = hotels
    .map((hotel) => {
      hotel.rooms = hotel.rooms.filter(
        (room) =>
          Number(room.occupancy?.maxAdults) >= filters.minAdults &&
          Number(room.occupancy?.maxChildren) >= filters.minChildren
      );
      return hotel;
    })
    .filter(
      ({ starRating, rooms }) =>
        Number(starRating) >= Number(filters.minRating) && rooms.length > 0
    );

  return (
    <StyledContainer>
      <Filters filters={filters} onFiltersUpdate={setFilters} />
      {isLoading ? (
        <Spinner />
      ) : filteredHotels.length === 0 ? (
        <StyledNoHotelsFound>Nothing found...</StyledNoHotelsFound>
      ) : (
        filteredHotels.map((hotel) => <Hotel key={hotel.id} hotel={hotel} />)
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  bottom: 25px;
`;

const StyledNoHotelsFound = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 30px;
`;
