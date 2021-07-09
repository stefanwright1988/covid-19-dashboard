import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { abbreviateNumber, difference } from "../../../helpers/number";
import StyledLargeCard from "./LargeCard.styled";
import { CovidHistory } from "../../../interfaces/covidInterface";

interface LargeCardProps {
  type: string;
}

const LargeCard = (props: LargeCardProps) => {
  let historyType = props.type.toLowerCase() as keyof CovidHistory;
  const { globalCovidHistory, daysToUse } = useContext(AppContext);
  if (!globalCovidHistory[historyType].length) {
    return (
      <StyledLargeCard
        subtitle=""
        type={props.type}
        cardData=""
        daysToUse={0}
        isBlank={true}
      />
    );
  }
  let minCardData = globalCovidHistory[historyType][0].reports ?? 0,
    maxCardData =
      globalCovidHistory[historyType][
        globalCovidHistory[historyType].length - 1
      ].reports;
  return (
    <StyledLargeCard
      subtitle={abbreviateNumber(difference(minCardData, maxCardData), 3)}
      type={props.type}
      cardData={globalCovidHistory[historyType]}
      daysToUse={daysToUse.value}
    />
  );
};

export default LargeCard;
