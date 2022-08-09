import React from "react";
import styled from "styled-components";

import { QuantityFilter } from "./QuantityFilter";
import isEqual from "lodash/isEqual";
import { RatingFilter } from "./RatingFilter";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const initialFilters = {
  minRating: 0,
  minAdults: 0,
  minChildren: 0,
};

type Props = {
  filters: typeof initialFilters;
  onFiltersUpdate: (newFilters: typeof initialFilters) => void;
};

export const Filters = ({ filters, onFiltersUpdate }: Props) => (
  <StyledContainer>
    <StyledFiltersLabel>
      Filter rooms
      <StyledResetButton
        title="reset filters"
        disabled={isEqual(initialFilters, filters)}
        onClick={() => onFiltersUpdate(initialFilters)}
      >
        <FontAwesomeIcon icon={faRefresh} />
      </StyledResetButton>
    </StyledFiltersLabel>
    <StyledInnerContainer>
      <RatingFilter
        value={filters.minRating}
        onValueUpdate={(newValue) =>
          onFiltersUpdate({ ...filters, minRating: newValue })
        }
      />
      <QuantityFilter
        label="Adults"
        value={filters.minAdults}
        onValueUpdate={(newValue) =>
          onFiltersUpdate({ ...filters, minAdults: newValue })
        }
      />
      <QuantityFilter
        label="Children"
        value={filters.minChildren}
        onValueUpdate={(newValue) =>
          onFiltersUpdate({ ...filters, minChildren: newValue })
        }
      />
    </StyledInnerContainer>
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 800px;
  height: 50px;
  max-width: 100%;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 6px 18px 24px 0px rgba(130, 130, 130, 0.1);
  @media only screen and (max-width: 720px) {
    height: auto;
    width: 100%;
    display: block;
  }
`;

const StyledFiltersLabel = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  padding: 5px 15px;
  border-right: 1px solid #dedede;
  @media only screen and (max-width: 720px) {
    border-right: none;
    border-bottom: 1px solid #dedede;
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  @media only screen and (max-width: 720px) {
    padding-left: 0px;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const StyledResetButton = styled.button`
  background: none;
  border: none;
  margin-left: 10px;
`;
