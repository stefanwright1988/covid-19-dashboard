import React, { useContext } from "react";
import SmallStyledCardsContainer from "../Small/SmallCardsContainer.styled";
import SmallCard from "../Small/SmallCard";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";

const SmallCardsContainer = () => {
  const { country, caseTypes } = useContext(AppContext);
  return (
    <>
      <SmallStyledCardsContainer>
        <h1>{toSentenceCase(country.label)} - Stats to date</h1>
        {caseTypes.map((type, index) => {
          return <SmallCard type={type} key={index} />;
        })}
      </SmallStyledCardsContainer>
    </>
  );
};

export default SmallCardsContainer;
