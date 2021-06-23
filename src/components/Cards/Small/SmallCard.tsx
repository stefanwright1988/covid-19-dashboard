import React from "react";
import StyledSmallCard from "./SmallCard.styled";

interface SmallCardProps {
  type?: string;
  count?: number | 0;
}

const SmallCard = (props: SmallCardProps) => {
  return (
    <StyledSmallCard
      subtitle={Number(props.count).toLocaleString()}
      type={props.type}
    />
  );
};

export default SmallCard;
