import React, { useContext } from "react";
import LargeStyledCardsContainer from "./HistoryCardsContainer.styled";
import HistoryCard from "./HistoryCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";

const HistoryCardsContainer = () => {
  const { country } = useContext(AppContext);
  return (
    <>
      <LargeStyledCardsContainer>
        <h1 style={{ width: "100%" }}>
          {toSentenceCase(country.label)} - Trend data
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <HistoryCard />
        </div>
      </LargeStyledCardsContainer>
    </>
  );
};

export default HistoryCardsContainer;
