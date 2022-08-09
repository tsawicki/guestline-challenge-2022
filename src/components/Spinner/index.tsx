import React from "react";
import styled from "styled-components";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Spinner = () => {
  return (
    <StyledContainer data-testid="spinner">
      <StyledFontAwesomeIcon icon={faSpinner} size="2x" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 30px;
  width: 100%;
  text-align: center;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  animation: rotation 2s infinite linear;
  color: #777;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
