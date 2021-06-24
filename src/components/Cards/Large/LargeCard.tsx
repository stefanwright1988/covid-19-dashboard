import React from "react";
import StyledLargeCard from "./LargeCard.styled";

interface LargeCardProps {
  type?: string;
  count?: number | 0;
}

const LargeCard = (props: LargeCardProps) => {
  return (
    <StyledLargeCard
      subtitle={Number(props.count).toLocaleString()}
      type={props.type}
    />
  );
};

export default LargeCard;
