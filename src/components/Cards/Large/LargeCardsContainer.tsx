import React from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";

interface LargeCardsContainerProps {
  title: string;
  cardData: any;
  daysToUse: number;
}

const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <LargeStyledCardsContainer>
        <LargeCard
          type="Deaths"
          cardData={props.cardData["deaths"]}
          daysToUse={props.daysToUse}
        />
        <LargeCard
          type="Recovered"
          cardData={props.cardData["recovered"]}
          daysToUse={props.daysToUse}
        />
        <LargeCard
          type="Cases"
          cardData={props.cardData["cases"]}
          daysToUse={props.daysToUse}
        />
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
