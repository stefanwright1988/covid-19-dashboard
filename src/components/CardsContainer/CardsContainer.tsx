import React from "react";
import StyledCardsContainer from "./CardsContainer.styled";
import SmallCard from "../Cards/Small/SmallCard";
import { CovidInfo } from "../../interfaces/covidInterface";

interface CardsContainerProps {
  cardData: CovidInfo | undefined;
}

const CardsContainer = (props: CardsContainerProps) => {
  return (
    <StyledCardsContainer>
      <SmallCard type="Recovered" count={props?.cardData?.recovered} />
      <SmallCard type="Deaths" count={props?.cardData?.deaths} />
      <SmallCard type="Active" count={props?.cardData?.active} />
      <SmallCard type="Cases" count={props?.cardData?.cases} />
    </StyledCardsContainer>
  );
};

export default CardsContainer;
