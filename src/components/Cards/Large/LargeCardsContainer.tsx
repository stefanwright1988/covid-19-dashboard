import React from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";

interface LargeCardsContainerProps {
  title: string;
  cardData: any;
}

const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <LargeStyledCardsContainer>
        <LargeCard type="Deaths" cardData={props.cardData["deaths"]} />
        <LargeCard type="Recovered" cardData={props.cardData["recovered"]} />
        <LargeCard type="Cases" cardData={props.cardData["cases"]} />
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
