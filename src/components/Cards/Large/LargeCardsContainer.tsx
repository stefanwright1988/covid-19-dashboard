import React, { useContext } from "react";
import LargeStyledCardsContainer from "../Large/LargeCardsContainer.styled";
import LargeCard from "../Large/LargeCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";

const LargeCardsContainer = () => {
  const { country } = useContext(AppContext);
  return (
    <>
      <LargeStyledCardsContainer>
        <h1 style={{ width: "100%" }}>
          {toSentenceCase(country.label)} - Trend data
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LargeCard />
        </div>
      </LargeStyledCardsContainer>
    </>
  );
};

export default LargeCardsContainer;
