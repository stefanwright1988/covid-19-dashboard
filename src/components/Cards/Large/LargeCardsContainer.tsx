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
    goToNextGraph = (index: number, len: number) => {
      let count = currentIndex;
      count = (count + 1) % filteredCaseTypes.length;
      setCurrentIndex(count);
      setPrevLabel(filteredCaseTypes[index]);
      /*       let nextIndex = 0,
        nextLabelIndex = 1;
      if (index < len - 1) {
        nextIndex = currentIndex + 1;
      }
      if (index < len - 2) {
        nextLabelIndex = currentIndex + 2;
      }
      setCurrentIndex(nextIndex);
      setNextLabel(filteredCaseTypes[nextLabelIndex]);
      setPrevLabel(filteredCaseTypes[index]); */
    },
    goToPrevGraph = (index: number, len: number) => {
      let prevIndex = len - 1;
      if (index > 0) prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setNextLabel(filteredCaseTypes[index]);
      setPrevLabel(filteredCaseTypes[prevIndex]);
    };
  return (
    <>
      <LargeStyledCardsContainer>
        <h1 style={{ width: "100%" }}>
          {toSentenceCase(country.label)} - Trend data
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              goToPrevGraph(currentIndex, indexLen);
            }}
          >
            {toSentenceCase(prevLabel)}
          </button>
          <LargeCard type={toSentenceCase(filteredCaseTypes[currentIndex])} />
          <button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              goToNextGraph(currentIndex, indexLen);
            }}
          >
            {toSentenceCase(nextLabel)}
          </button>
        </div>
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
