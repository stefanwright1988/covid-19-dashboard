import React, { useContext } from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";

interface LargeCardsContainerProps {
  cardData: any;
}

const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  const { country, caseTypes } = useContext(AppContext);
  return (
    <>
      <h1>{toSentenceCase(country)} - Trend data</h1>
      <LargeStyledCardsContainer>
        {caseTypes.map((type) => {
          return <LargeCard type={toSentenceCase(type)} />;
        })}
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
