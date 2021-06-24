import React from "react";
import SmallStyledCardsContainer from "../Small/SmallCardsContainer.styled";
import SmallCard from "../Small/SmallCard";
import { CovidInfo } from "../../../interfaces/covidInterface";

interface SmallCardsContainerProps {
  cardData: CovidInfo | undefined;
  title: string;
}

const SmallCardsContainer = (props: SmallCardsContainerProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <SmallStyledCardsContainer>
        <SmallCard type="Recovered" count={props?.cardData?.recovered} />
        <SmallCard type="Deaths" count={props?.cardData?.deaths} />
        <SmallCard type="Active" count={props?.cardData?.active} />
        <SmallCard type="Cases" count={props?.cardData?.cases} />
      </SmallStyledCardsContainer>
    </>
  );
};

export default SmallCardsContainer;
