import React, { useEffect, useState } from "react";
import { getCountries, getGlobalCovidInfo } from "../../api/covidFetch";
import { orderTableDataBy } from "../../helpers/orderCovidData";
import { Country, CovidInfo } from "../../interfaces/covidInterface";
import Header from "../Header/Header";
import Content from "../Content/Content";
import StyledContentContainer from "./ContentContainer.styled";

const ContentContainer = () => {
  return (
    <StyledContentContainer>
      <Header />
      <Content />
    </StyledContentContainer>
  );
};

export default ContentContainer;
