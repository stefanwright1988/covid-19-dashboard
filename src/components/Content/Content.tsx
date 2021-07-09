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
    { value: 7, label: 7 },
    { value: 30, label: 30 },
    { value: 60, label: 60 },
    { value: 90, label: 90 },
    { value: 180, label: 180 },
    { value: 365, label: 365 },
  ];
  return (
    <StyledContent>
      <Select
        options={countries}
        defaultValue={country}
        onChange={changeCountry}
      />
      <Select
        options={daysForSelection}
        defaultValue={daysToUse}
        onChange={changeDays}
      />
      {/* <Dropdown onChange={changeCountry}>
        {countries.map((value) => {
          return <Option value={value.name}>{value.name}</Option>;
        })}
      </Dropdown>
      <Dropdown onChange={changeDays} daysToUse={daysToUse}>
        <Option value={7}>7 Days</Option>
        <Option value={30}>30 Days</Option>
        <Option value={60}>60 Days</Option>
        <Option value={90}>90 Days</Option>
        <Option value={180}>180 Days</Option>
        <Option value={365}>365 Days</Option>
      </Dropdown> */}
      <SmallCardsContainer />
      <LargeCardsContainer cardData={globalCovidHistory} />
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
