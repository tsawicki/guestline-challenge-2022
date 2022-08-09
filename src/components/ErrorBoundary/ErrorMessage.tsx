import React from "react";
import styled from "styled-components";

export const ErrorMessage = () => {
  return (
    <StyledContainer>
      <h1>Ooops... something went wrong</h1>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 30px;
  width: 100%;
  text-align: center;
`;
