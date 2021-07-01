import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { abbreviateNumber, difference } from "../../../helpers/number";
import StyledLargeCard from "./LargeCard.styled";
import StyledContent from "../../Content/Content.styled";

interface LargeCardProps {
  type?: string;
  cardData: any;
  daysToUse: number;
}

const LargeCard = (props: LargeCardProps) => {
  const { loading, globalCovidHistory } = useContext(AppContext);
  if (!globalCovidHistory || loading) {
    return (
      <StyledContent>
        <svg width="51px" height="50px" viewBox="0 0 51 50">
          <rect y="0" width="13" height="50" fill="#1fa2ff">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="19" y="0" width="13" height="50" fill="#12d8fa">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="38" y="0" width="13" height="50" fill="#06ffcb">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </StyledContent>
    );
  }
  let minCardData = globalCovidHistory.cases[0].reports ?? 0,
    maxCardData =
      globalCovidHistory.cases[globalCovidHistory.cases.length - 1].reports;
  return (
    <StyledLargeCard
      subtitle={difference(minCardData, maxCardData).toLocaleString()}
      type={props.type}
      cardData={props.cardData}
      daysToUse={props.daysToUse}
    />
  );
};

export default LargeCard;
