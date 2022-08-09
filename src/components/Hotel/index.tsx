import React from "react";
import styled from "styled-components";
import { Hotel as HotelType } from "../../types";
import { Room } from "../Room";
import { Images } from "./Images";

import { StarRating } from "./StarRating";

type Props = {
  hotel: HotelType;
};

export const Hotel = ({ hotel }: Props) => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Images images={hotel.images} />
        <StyledHotelInfo>
          <StyledHotelNameAndAddress>
            <StyledHotelName>{hotel.name}</StyledHotelName>
            {hotel.address1}
            <br />
            {hotel.address2}
          </StyledHotelNameAndAddress>
          <StarRating stars={Number(hotel.starRating)} />
        </StyledHotelInfo>
      </StyledInnerContainer>
      {hotel.rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 6px 18px 24px 0px rgba(130, 130, 130, 0.1);
`;

const StyledInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const StyledHotelName = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledHotelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  @media only screen and (max-width: 720px) {
    display: block;
  }
`;

const StyledHotelNameAndAddress = styled.div`
  padding-right: 20px;
`;
