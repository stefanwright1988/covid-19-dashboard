import React, { useContext, useState } from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";
import Slider from "react-slick";
import _ from "lodash";

interface LargeCardsContainerProps {
  cardData: any;
}

const LargeCardsContainer = (props: LargeCardsContainerProps) => {
  const { country, caseTypes } = useContext(AppContext),
    filteredCaseTypes = caseTypes.filter((type) => type !== "active"),
    [currentIndex, setCurrentIndex] = useState(0),
    [nextLabel, setNextLabel] = useState(filteredCaseTypes[1]),
    [prevLabel, setPrevLabel] = useState(
      filteredCaseTypes[filteredCaseTypes.length - 1]
    ),
    indexLen = filteredCaseTypes.length,
    endOfIndex = indexLen - 1,
    goToNextGraph = (currentIndex: number) => {
      let increment = currentIndex + 1,
        updateIndex = 0,
        nextLabel = 0,
        prevLabel = 0;
      if (increment === indexLen) {
        updateIndex = 0;
        nextLabel = 1;
        prevLabel = endOfIndex;
      } else {
        updateIndex = increment;
        prevLabel = currentIndex;
        nextLabel = increment + 1 === indexLen ? 0 : increment + 1;
      }
      setCurrentIndex(updateIndex);
      setNextLabel(filteredCaseTypes[nextLabel]);
      setPrevLabel(filteredCaseTypes[prevLabel]);
    },
    goToPrevGraph = (currentIndex: number) => {
      let decrement = currentIndex - 1,
        updateIndex = 0,
        nextLabel = 0,
        prevLabel = 0;
      if (decrement < 0) {
        updateIndex = endOfIndex;
        nextLabel = 0;
        prevLabel = endOfIndex - 1;
      } else {
        updateIndex = decrement;
        prevLabel = decrement - 1 < 0 ? endOfIndex : decrement - 1;
        nextLabel = currentIndex;
      }
      setCurrentIndex(updateIndex);
      setNextLabel(filteredCaseTypes[nextLabel]);
      setPrevLabel(filteredCaseTypes[prevLabel]);
    };
  return (
    <>
      <LargeStyledCardsContainer>
        <h1 style={{ width: "100%" }}>
          {toSentenceCase(country.label)} - Trend data
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LargeCard
            type={toSentenceCase(filteredCaseTypes[currentIndex])}
            prevButton={goToPrevGraph}
            nextButton={goToNextGraph}
            currentIndex={currentIndex}
            nextLabel={nextLabel}
            prevLabel={prevLabel}
          />
        </div>
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
