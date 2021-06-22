import React from "react";
import StyledCardsContainer from "./CardsContainer.styled";
import SmallCard from "../Cards/Small/SmallCard";

function CardsContainer() {
  return (
    <StyledCardsContainer>
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </StyledCardsContainer>
  );
}

export default CardsContainer;
