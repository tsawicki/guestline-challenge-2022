import React from "react";
import styled from "styled-components";
import coverImage from "../../assets/cover-image.jpg";

export const CoverImage = () => (
  <StyledCoverImage>
    <StyledCoverText>
      <h1>Guestline interview challenge 2022</h1>
      <small>author: Tomasz Sawicki</small>
    </StyledCoverText>
  </StyledCoverImage>
);

const StyledCoverImage = styled.div`
  background: url(${coverImage});
  background-size: cover;
  background-position: center center;
  color: #fff;
  display: flex;
  align-items: stretch;
`;

const StyledCoverText = styled.div`
  width: 100%;
  padding: 50px 10px 100px 10px;
  backdrop-filter: blur(5px) brightness(50%);
  text-align: center;
  h1 {
    font-size: 42px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 24px;
    }
  }
`;
