import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { abbreviateNumber, difference } from "../../../helpers/number";
import StyledLargeCard from "./LargeCard.styled";
import { CovidHistory } from "../../../interfaces/covidInterface";

interface LargeCardProps {
  type: string;
  prevButton: (currentIndex: number) => void;
  nextButton: (currentIndex: number) => void;
  currentIndex: number;
  prevIndex: number;
  nextIndex: number;
  nextLabel: string;
  prevLabel: string;
}

const LargeCard = (props: LargeCardProps) => {
  let currentHistoryType = props.type.toLowerCase() as keyof CovidHistory,
    nextHistoryType = props.nextLabel.toLowerCase() as keyof CovidHistory,
    prevHistoryType = props.prevLabel.toLowerCase() as keyof CovidHistory;
  const { globalCovidHistory, daysToUse } = useContext(AppContext);
  if (!globalCovidHistory[currentHistoryType].length) {
    return (
      <StyledLargeCard
        currentDetails=""
        cardData=""
        daysToUse={0}
        isBlank={true}
        prevButton={props.prevButton}
        prevDetails=""
        prevIndex={props.prevIndex}
        nextButton={props.nextButton}
        nextDetails=""
        nextIndex={props.nextIndex}
        currentIndex={props.currentIndex}
        currentLabel={props.type}
        nextLabel={props.nextLabel}
        prevLabel={props.prevLabel}
      />
    );
  }
  let currentMinCardData =
      globalCovidHistory[currentHistoryType][0].reports ?? 0,
    currentMaxCardData =
      globalCovidHistory[currentHistoryType][
        globalCovidHistory[currentHistoryType].length - 1
      ].reports;
  let nextMinCardData = globalCovidHistory[nextHistoryType][0].reports ?? 0,
    nextMaxCardData =
      globalCovidHistory[nextHistoryType][
        globalCovidHistory[nextHistoryType].length - 1
      ].reports;
  let prevMinCardData = globalCovidHistory[prevHistoryType][0].reports ?? 0,
    prevMaxCardData =
      globalCovidHistory[prevHistoryType][
        globalCovidHistory[prevHistoryType].length - 1
      ].reports;
  return (
    <StyledLargeCard
      cardData={globalCovidHistory[currentHistoryType]}
      daysToUse={daysToUse.value}
      prevButton={props.prevButton}
      prevDetails={abbreviateNumber(
        difference(prevMinCardData, prevMaxCardData),
        3
      )}
      prevLabel={props.prevLabel}
      prevIndex={props.prevIndex}
      currentIndex={props.currentIndex}
      currentDetails={abbreviateNumber(
        difference(currentMinCardData, currentMaxCardData),
        3
      )}
      currentLabel={props.type}
      nextLabel={props.nextLabel}
      nextDetails={abbreviateNumber(
        difference(nextMinCardData, nextMaxCardData),
        3
      )}
      nextIndex={props.nextIndex}
      nextButton={props.nextButton}
    />
  );
};

export default LargeCard;
