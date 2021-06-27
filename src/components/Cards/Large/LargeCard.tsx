import React from "react";
import { abbreviateNumber, difference } from "../../../helpers/number";
import StyledLargeCard from "./LargeCard.styled";

interface LargeCardProps {
  type?: string;
  cardData: any;
}

const LargeCard = (props: LargeCardProps) => {
  let minCardData = props.cardData[0].reports,
    maxCardData = props.cardData[props.cardData.length - 1].reports;
  return (
    <StyledLargeCard
      subtitle={difference(minCardData, maxCardData).toLocaleString()}
      type={props.type}
      cardData={props.cardData}
    />
  );
};

export default LargeCard;
