import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const QuantityFilter = ({
  label,
  value,
  onValueUpdate,
}: {
  label: string;
  value: number;
  onValueUpdate: (newValue: number) => void;
}) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledButton
        title="decrease counter"
        onClick={() => onValueUpdate(value - 1)}
        disabled={value === 0}
      >
        <FontAwesomeIcon icon={faMinus} />
      </StyledButton>
      <StyledText>{value}</StyledText>
      <StyledButton
        title="increase counter"
        onClick={() => onValueUpdate(value + 1)}
        data-testid={`${label}-increase-buttons`}
      >
        <FontAwesomeIcon icon={faPlus} />
      </StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 500px) {
    padding: 5px;
  }
`;

const StyledLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 12px;
`;

const StyledText = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  padding: 0 8px;
  width: 40px;
  text-align: center;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
`;
