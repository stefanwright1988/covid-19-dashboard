import React from "react";
import { CovidInfo } from "../../../interfaces/covidInterface";
import StyledSmallCard from "./SmallCard.styled";

interface SmallCardProps {
  type?: string;
  count?: any;
  updated: string;
}

const SmallCard = (props: SmallCardProps) => {
  return (
    <StyledSmallCard
      subtitle={Number(props.count).toLocaleString()}
      type={props.type}
      updated={props.updated}
    />
  );
};

export default SmallCard;
