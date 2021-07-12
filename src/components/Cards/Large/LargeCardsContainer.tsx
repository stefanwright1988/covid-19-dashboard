import React, { useContext } from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";
import Slider from "react-slick";

interface LargeCardsContainerProps {
  cardData: any;
}

const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  const { country, caseTypes } = useContext(AppContext);
  return (
    <>
      <LargeStyledCardsContainer>
        <h1>{toSentenceCase(country.label)} - Trend data</h1>
        <LargeCard type={toSentenceCase(caseTypes[0])} />
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
