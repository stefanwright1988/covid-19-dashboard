import React, { useEffect, useState } from "react";
import {
  getCountries,
  getGlobalCovidInfo,
  getGlobalCovidHistory,
} from "../../api/covidFetch";
import { orderTableDataBy } from "../../helpers/orderCovidData";
import { Country, CovidInfo } from "../../interfaces/covidInterface";
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
    loading,
    updateLoading,
    countries,
    updateCountries,
    country,
    updateCountry,
    daysToUse,
    updateDaysToUse,
    covidInfo,
    updateCovidInfo,
    globalCovidHistory,
    updateGlobalCovidHistory,
    tableData,
    updateTableData,
    mapCountries,
    updateMapCountries,
    mapData,
    updateMapData,
    casesType,
    updateCasesType,
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
    const getGlobalHistory = async () => {
      const response = await getGlobalCovidHistory(daysToUse);
      updateGlobalCovidHistory(response);
      updateLoading(false);
    };
    getGlobalHistory();
  }, [daysToUse]);

  useEffect(() => {
    const getGlobalStats = async () => {
      const response = await getGlobalCovidInfo();
      updateCovidInfo(response);
      updateLoading(false);
    };
    getGlobalStats();
  }, []);
  const handleSelect = (e: any) => {
    console.log(e.target.value);
    updateDaysToUse(e.target.value);
  };

  if (loading) {
    return (
      <StyledContent>
        <svg width="51px" height="50px" viewBox="0 0 51 50">
          <rect y="0" width="13" height="50" fill="#1fa2ff">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="19" y="0" width="13" height="50" fill="#12d8fa">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="38" y="0" width="13" height="50" fill="#06ffcb">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </StyledContent>
    );
  }

  return (
    <StyledContent>
      <Dropdown action="post">
        {countries.map((value, index) => {
          return <Option value={value.name}>{value.name}</Option>;
        })}
      </Dropdown>
      <Dropdown onChange={handleSelect}>
        <Option selected value={30}>
          30 Days
        </Option>
        <Option value={60}>60 Days</Option>
        <Option value={90}>90 Days</Option>
        <Option value={180}>180 Days</Option>
        <Option value={365}>365 Days</Option>
      </Dropdown>
      <SmallCardsContainer title="Worldwide stats" cardData={covidInfo} />
      <LargeCardsContainer
        title="Worldwide stats trend"
        cardData={globalCovidHistory}
        daysToUse={daysToUse}
      />
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
