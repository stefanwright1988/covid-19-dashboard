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
import { Dropdown, Option } from "../Form/form";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

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
        name: country.country,
        value: country.countryInfo.iso3,
      }));

      countryList.unshift({ name: "Worldwide", value: "worldwide" });
      updateCountries(countryList);
      const orderedTableData: CovidInfo[] = orderTableDataBy(
        response,
        "cases",
        "desc"
      );
      updateTableData(orderedTableData);
      updateMapCountries(response);
      updateCountry("worldwide");
    };
    getAllCountries();
  }, []);

  useEffect(() => {
    updateLoading(true);
    const getCovidHistoryByCountry = async () => {
      const response = await getCovidHistory(country, daysToUse);
      updateGlobalCovidHistory(response);
      updateLoading(false);
    };
    getCovidHistoryByCountry();
  }, [country, daysToUse]);

  useEffect(() => {
    const getCovidStats = async () => {
      const response = await getCovidInfo(country);
      updateCovidInfo(response);
      updateLoading(false);
    };
    getCovidStats();
  }, [country]);

  const changeDays = (e: any) => {
    updateDaysToUse(e.target.value);
  };

  const changeCountry = (e: any) => {
    updateCountry(e.target.value);
  };
  return (
    <StyledContent>
      <Dropdown onChange={changeCountry}>
        {countries.map((value) => {
          return <Option value={value.name}>{value.name}</Option>;
        })}
      </Dropdown>
      <Dropdown onChange={changeDays}>
        <Option value={30}>30 Days</Option>
        <Option value={60}>60 Days</Option>
        <Option value={90}>90 Days</Option>
        <Option value={180}>180 Days</Option>
        <Option value={365}>365 Days</Option>
      </Dropdown>
      <SmallCardsContainer />
      <LargeCardsContainer cardData={globalCovidHistory} />
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
