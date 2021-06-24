import React from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";
import { CovidInfo } from "../../../interfaces/covidInterface";

interface LargeCardsContainerProps {
  cardData: CovidInfo | undefined;
  title: string;
}

const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <LargeStyledCardsContainer>
        <LargeCard type="Recovered" count={props?.cardData?.recovered} />
        <LargeCard type="Deaths" count={props?.cardData?.deaths} />
        <LargeCard type="Active" count={props?.cardData?.active} />
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
