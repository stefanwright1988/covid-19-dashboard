import React, { useContext, useEffect } from "react";
import Select from "react-select";
import { getCountries } from "../../api/covidFetch";
import { AppContext } from "../../context/AppContext";
import { orderTableDataBy } from "../../helpers/orderCovidData";
import { CovidInfo } from "../../interfaces/covidInterface";
import StyledHeader from "./Header.styled";

export const Header = () => {
  const {
    countries,
    updateCountries,
    country,
    updateCountry,
    daysToUse,
    updateDaysToUse,
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
    <StyledHeader>
      <h1>COVID-19 Tracker</h1>
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
    </StyledHeader>
  );
};

export default Header;
