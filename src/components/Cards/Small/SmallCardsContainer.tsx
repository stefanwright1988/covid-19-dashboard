import React from "react";
import SmallStyledCardsContainer from "../Small/SmallCardsContainer.styled";
import SmallCard from "../Small/SmallCard";
import { CovidInfo } from "../../../interfaces/covidInterface";

interface SmallCardsContainerProps {
  cardData: CovidInfo | undefined;
  title: string;
}

const SmallCardsContainer = (props: SmallCardsContainerProps) => {
  const lastUpdatedState = props?.cardData?.updated || 0;
  const lastUpdatedDateFormat = new Date(lastUpdatedState);
  const lastUpdatedDateString = lastUpdatedDateFormat.toUTCString();
  return (
    <>
      <h1>{props.title}</h1>
      <SmallStyledCardsContainer>
        <SmallCard
          type="Deaths"
          count={props?.cardData?.deaths}
          updated={lastUpdatedDateString}
        />
        <SmallCard
          type="Active"
          count={props?.cardData?.active}
          updated={lastUpdatedDateString}
        />
        <SmallCard
          type="Recovered"
          count={props?.cardData?.recovered}
          updated={lastUpdatedDateString}
        />
        <SmallCard
          type="Cases"
          count={props?.cardData?.cases}
          updated={lastUpdatedDateString}
        />
      </SmallStyledCardsContainer>
    </>
  );
};

export default SmallCardsContainer;
