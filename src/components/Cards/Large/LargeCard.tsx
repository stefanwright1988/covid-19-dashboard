import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { abbreviateNumber, difference } from "../../../helpers/number";
import StyledLargeCard from "./LargeCard.styled";
import { CovidHistory } from "../../../interfaces/covidInterface";

const LargeCard = () => {
  const { globalCovidHistory, activeCaseType } = useContext(AppContext);
  if (!globalCovidHistory[activeCaseType as keyof CovidHistory].length) {
    return <StyledLargeCard isBlank={true} />;
  }
  return <StyledLargeCard isBlank={false} />;
};

export default LargeCard;
