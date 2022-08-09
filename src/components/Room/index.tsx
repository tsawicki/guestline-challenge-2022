import React from "react";
import styled from "styled-components";
import { Room as RoomType } from "../../types";

type Props = {
  room: RoomType;
};

export const Room = ({ room }: Props) => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledRoomName>{room.name}</StyledRoomName>
        <p>Adults: {room.occupancy.maxAdults}</p>
        <p>Children: {room.occupancy.maxChildren}</p>
      </StyledInnerContainer>
      <StyledDescription>{room.longDescription}</StyledDescription>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: #fff;
  border-top: 1px solid #dedede;
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 20px;
  padding: 10px 0;
  line-height: 1.3;
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    display: block;
    padding: 20px 0;
  }
`;

const StyledInnerContainer = styled.div`
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const StyledDescription = styled.div`
  color: #555;
`;

const StyledRoomName = styled.h6`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;
