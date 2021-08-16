import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { abbreviateNumber, difference } from "../../../helpers/number";
import StyledHistoryCard from "./HistoryCard.styled";
import { CovidHistory } from "../../../interfaces/covidInterface";

const HistoryCard = () => {
  const { globalCovidHistory, globalCovidHistoryError, activeCaseType } =
    useContext(AppContext);
  if (
    globalCovidHistoryError ||
    (globalCovidHistory &&
      globalCovidHistory[activeCaseType as keyof CovidHistory] &&
      !globalCovidHistory[activeCaseType as keyof CovidHistory].length)
  ) {
    return <StyledHistoryCard isBlank={true} />;
  }
  return <StyledHistoryCard isBlank={false} />;
};

export default HistoryCard;
