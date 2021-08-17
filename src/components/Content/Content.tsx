/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getCovidHistory, getCovidInfo } from "../../api/covidFetch";
import SimpleMap from "../Map/Map";
import { CountriesTable } from "../Tables/tables";
import StyledContent from "./Content.styled";
import SmallCardsContainer from "../Cards/Small/SmallCardsContainer";
import HistoryCardsContainer from "../Cards/History/HistoryCardsContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Content = () => {
  const {
    updateLoading,
    country,
    daysToUse,
    updateCovidInfo,
    updateCovidInfoError,
    updateGlobalCovidHistory,
    updateGlobalCovidHistoryError,
    tableData,
  } = useContext(AppContext);

  useEffect(() => {
    updateLoading(true);
    getCovidHistory(
      country.value,
      daysToUse.value,
      updateGlobalCovidHistoryError,
      updateGlobalCovidHistory,
      updateLoading
    );
  }, [country, daysToUse]);

  useEffect(() => {
    updateLoading(true);
    getCovidInfo(
      country.value,
      updateCovidInfoError,
      updateCovidInfo,
      updateLoading
    );
  }, [country]);
  return (
    <StyledContent>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SmallCardsContainer />
        <HistoryCardsContainer />
      </div>
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
