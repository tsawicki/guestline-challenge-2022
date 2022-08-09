import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

export const StarRating = ({ stars }: { stars: number }) => {
  return (
    <StyledRating>
      {Array.from(Array(stars)).map((_, i) => (
        <FontAwesomeIcon
          icon={faStar}
          key={`full-star-${i}`}
          data-testid="full star"
        />
      ))}
      {Array.from(Array(5 - stars)).map((_, i) => (
        <FontAwesomeIcon
          icon={faStarEmpty}
          key={`empty-star-${i}`}
          data-testid="empty star"
        />
      ))}
    </StyledRating>
  );
};

const StyledRating = styled.div`
  color: #ffbf00;
  font-size: 24px;
  @media only screen and (max-width: 720px) {
    margin-top: 20px;
    font-size: 16px;
  }
`;
