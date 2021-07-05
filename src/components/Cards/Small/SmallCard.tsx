import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { toSentenceCase } from "../../../helpers/strings";
import { CovidInfo } from "../../../interfaces/covidInterface";
import StyledSmallCard from "./SmallCard.styled";

interface SmallCardProps {
  type?: string;
}

const SmallCard = (props: SmallCardProps) => {
  const { covidInfo } = useContext(AppContext);
  if (
    !covidInfo?.[props.type as keyof CovidInfo] &&
    covidInfo?.[props.type as keyof CovidInfo] !== 0
  ) {
    return <StyledSmallCard subtitle="" type={props.type} isBlank={true} />;
  }
  return (
    <StyledSmallCard
      subtitle={Number(
        covidInfo?.[props.type as keyof CovidInfo]
      ).toLocaleString()}
      type={toSentenceCase(props.type || "")}
      updated={new Date(covidInfo?.updated || "").toUTCString()}
    />
  );
};

export default SmallCard;
