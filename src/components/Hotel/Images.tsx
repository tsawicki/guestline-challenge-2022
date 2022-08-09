import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import { Image } from "../../types";
import "react-slideshow-image/dist/styles.css";

type Props = {
  images: Array<Image>;
};

export const Images = ({ images }: Props) => (
  <StyledContainer>
    {images.length > 1 ? (
      <Slide>
        {images.map((image) => (
          <img src={image.url} alt={image.alt} key={image.url} />
        ))}
      </Slide>
    ) : (
      <img src={images[0].url} alt={images[0].alt} />
    )}
  </StyledContainer>
);

const StyledContainer = styled.div`
  height: 200px;
  width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 500px) {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
  }
`;
