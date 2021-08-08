/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getCovidHistory, getCovidInfo } from "../../api/covidFetch";
import SimpleMap from "../Map/Map";
import { CountriesTable } from "../Tables/tables";
import StyledContent from "./Content.styled";
import SmallCardsContainer from "../Cards/Small/SmallCardsContainer";
import LargeCardsContainer from "../Cards/Large/LargeCardsContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Content = () => {
  const {
    updateLoading,
    country,
    daysToUse,
    updateCovidInfo,
    updateGlobalCovidHistory,
    tableData,
  } = useContext(AppContext);

  useEffect(() => {
    updateLoading(true);
    const getCovidHistoryByCountry = async () => {
      const response = await getCovidHistory(country.value, daysToUse.value);
      updateGlobalCovidHistory(response);
      updateLoading(false);
    };
    getCovidHistoryByCountry();
  }, [country, daysToUse]);

  useEffect(() => {
    const getCovidStats = async () => {
      const response = await getCovidInfo(country.value);
      updateCovidInfo(response);
      updateLoading(false);
    };
    getCovidStats();
  }, [country]);
  return (
    <StyledContent>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SmallCardsContainer />
        <LargeCardsContainer />
      </div>
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
