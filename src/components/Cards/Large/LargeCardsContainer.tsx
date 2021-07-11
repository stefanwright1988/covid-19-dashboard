import React, { useContext } from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";
import Slider from "react-slick";

interface LargeCardsContainerProps {
  cardData: any;
}

const sliderSettings = {
  dots: true,
  infinite: true,
};
const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  const { country, caseTypes } = useContext(AppContext);
  return (
    <>
      <LargeStyledCardsContainer>
        <h1>{toSentenceCase(country.label)} - Trend data</h1>
        <Slider {...sliderSettings}>
          {caseTypes
            .filter((type) => type !== "active")
            .map((type) => {
              return <LargeCard type={toSentenceCase(type)} />;
            })}
        </Slider>
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
