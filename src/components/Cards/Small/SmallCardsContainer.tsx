import React, { useContext } from "react";
import SmallStyledCardsContainer from "../Small/SmallCardsContainer.styled";
import SmallCard from "../Small/SmallCard";
import { CovidInfo } from "../../../interfaces/covidInterface";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";

interface SmallCardsContainerProps {
  cardData: CovidInfo | undefined;
}

const SmallCardsContainer = (props: SmallCardsContainerProps) => {
  const { country, covidInfo, caseTypes } = useContext(AppContext);
  const lastUpdatedState = covidInfo?.updated || 0;
  const lastUpdatedDateFormat = new Date(lastUpdatedState);
  const lastUpdatedDateString = lastUpdatedDateFormat.toUTCString();
  return (
    <>
      <h1>{toSentenceCase(country)} - Stats to date</h1>
      <SmallStyledCardsContainer>
        {caseTypes.map((type) => {
          const caseType = type as keyof CovidInfo;
          return (
            <SmallCard
              type={toSentenceCase(type)}
              count={covidInfo?.[caseType]}
              updated={lastUpdatedDateString}
            />
          );
        })}
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
