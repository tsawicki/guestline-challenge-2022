import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

export const RatingFilter = ({
  value,
  onValueUpdate,
}: {
  value: number;
  onValueUpdate: (newValue: number) => void;
}) => {
  return (
    <StyledContainer data-testid="star-rating">
      {Array.from(Array(5)).map((_, index) => (
        <StyledButton
          onClick={() => onValueUpdate(index + 1)}
          key={`rating-${index}`}
          data-testid={`${index + 1}-star-button`}
        >
          <StyledFontAwesomeIcon
            icon={index < Number(value) ? faStar : faStarEmpty}
          />
        </StyledButton>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  @media only screen and (max-width: 500px) {
    padding: 5px;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  margin: 0;
  padding: 2px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ffbf00;
`;
