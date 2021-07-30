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
    [nextIndex, setNextIndex] = useState(1),
    [prevIndex, setPrevIndex] = useState(2),
    [nextLabel, setNextLabel] = useState(filteredCaseTypes[1]),
    [prevLabel, setPrevLabel] = useState(
      filteredCaseTypes[filteredCaseTypes.length - 1]
    ),
    indexLen = filteredCaseTypes.length,
    endOfIndex = indexLen - 1,
    goToNextGraph = (currentIndex: number) => {
      let increment = currentIndex + 1,
        updateCurrentIndex = 0,
        updateNextLabel = 0,
        updateNextIndex = 0,
        updatePrevLabel = 0,
        updatePrevIndex = 0;
      if (increment === indexLen) {
        updateCurrentIndex = 0;
        updateNextLabel = 1;
        updateNextIndex = 1;
        updatePrevLabel = endOfIndex;
        updatePrevIndex = endOfIndex;
      } else {
        updateCurrentIndex = increment;
        updatePrevLabel = currentIndex;
        updatePrevIndex = currentIndex;
        updateNextLabel = increment + 1 === indexLen ? 0 : increment + 1;
        updateNextIndex = increment + 1 === indexLen ? 0 : increment + 1;
      }
      setCurrentIndex(updateCurrentIndex);
      /*       setNextIndex(updateNextIndex);
      setPrevIndex(updatePrevIndex);
      setNextLabel(filteredCaseTypes[updateNextLabel]);
      setPrevLabel(filteredCaseTypes[updatePrevLabel]); */
    },
    goToPrevGraph = (currentIndex: number) => {
      let decrement = currentIndex - 1,
        updateCurrentIndex = 0,
        updateNextLabel = 0,
        updateNextIndex = 0,
        updatePrevLabel = 0,
        updatePrevIndex = 0;
      if (decrement < 0) {
        updateCurrentIndex = endOfIndex;
        updateNextLabel = 0;
        updatePrevLabel = endOfIndex - 1;
        updatePrevIndex = endOfIndex - 1;
      } else {
        updateCurrentIndex = decrement;
        updatePrevLabel = decrement - 1 < 0 ? endOfIndex : decrement - 1;
        updatePrevIndex = decrement - 1 < 0 ? endOfIndex : decrement - 1;
        updateNextLabel = currentIndex;
        updateNextIndex = currentIndex;
      }
      setCurrentIndex(updateCurrentIndex);
      /*       setNextIndex(updateNextIndex);
      setPrevIndex(updatePrevIndex);
      setNextLabel(filteredCaseTypes[updateNextLabel]);
      setPrevLabel(filteredCaseTypes[updatePrevLabel]); */
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
            nextIndex={nextIndex}
            prevIndex={prevIndex}
            nextLabel={toSentenceCase(nextLabel)}
            prevLabel={toSentenceCase(prevLabel)}
          />
        </div>
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
