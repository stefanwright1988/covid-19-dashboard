import React from "react";
import SimpleMap from "../Map/Map";
import StyledContent from "./Content.styled";

const Content = () => {
  return (
    <StyledContent>
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
