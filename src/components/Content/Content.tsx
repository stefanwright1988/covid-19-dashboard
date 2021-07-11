/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  getCountries,
  getCovidHistory,
  getCovidInfo,
} from "../../api/covidFetch";
import { orderTableDataBy } from "../../helpers/orderCovidData";
import { CovidInfo } from "../../interfaces/covidInterface";
import SimpleMap from "../Map/Map";
import { CountriesTable } from "../Tables/tables";
import StyledContent from "./Content.styled";
import SmallCardsContainer from "../Cards/Small/SmallCardsContainer";
import LargeCardsContainer from "../Cards/Large/LargeCardsContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Select from "react-select";

const Content = () => {
  const {
    updateLoading,
    countries,
    updateCountries,
    country,
    updateCountry,
    daysToUse,
    updateDaysToUse,
    updateCovidInfo,
    globalCovidHistory,
    updateGlobalCovidHistory,
    tableData,
    updateTableData,
    updateMapCountries,
  } = useContext(AppContext);

  useEffect(() => {
    const getAllCountries = async () => {
      const response: CovidInfo[] = await getCountries();

      const countryList = response.map((country: CovidInfo) => ({
        label: country.country,
        value: country.countryInfo.iso3,
      }));

      countryList.unshift({ label: "Worldwide", value: "worldwide" });
      updateCountries(countryList);
      const orderedTableData: CovidInfo[] = orderTableDataBy(
        response,
        "cases",
        "desc"
      );
      updateTableData(orderedTableData);
      updateMapCountries(response);
      updateCountry({ label: "Worldwide", value: "worldwide" });
    };
    getAllCountries();
  }, []);

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

  const changeDays = (e: any) => {
    updateDaysToUse({ value: e.value, label: e.label });
  };

  const changeCountry = (e: any) => {
    updateCountry({ value: e.value, label: e.label });
  };

  const daysForSelection = [
    { value: 7, label: "Last 7 days" },
    { value: 30, label: "Last 30 days" },
    { value: 60, label: "Last 60 days" },
    { value: 90, label: "Last 90 days" },
    { value: 180, label: "Last 180 days" },
    { value: 365, label: "Last 365 days" },
  ];
  return (
    <StyledContent>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "blue",
          borderRadius: "10px",
          justifyContent: "space-between",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            width: "33%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2>Select country:</h2>
          <Select
            options={countries}
            defaultValue={country}
            onChange={changeCountry}
            styles={{
              container: (base) => ({
                ...base,
                flex: 1,
                padding: "0 10px",
              }),
            }}
          />
        </div>

        <div
          style={{
            width: "33%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2>Select date range</h2>
          <Select
            options={daysForSelection}
            defaultValue={daysToUse}
            onChange={changeDays}
            styles={{
              container: (base) => ({
                ...base,
                flex: 1,
                padding: "0 10px",
              }),
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SmallCardsContainer />
        <LargeCardsContainer cardData={globalCovidHistory} />
      </div>
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
